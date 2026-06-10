#!/usr/bin/env python3
"""
Batch background-removal for the cut-out side decoration.

Drop Sophie's source photos into  tools/source/  then run:

    tools/.venv/bin/python tools/cutout.py

Runs the U^2-Net segmentation model directly via onnxruntime (no rembg /
OpenCV dependency, which avoids a fragile from-source build). The model
(~176MB) is downloaded once to tools/models/. Each image gets its
background removed, is tightly cropped to the object, and is written as a
transparent PNG to public/cutouts/  ready to reference from
src/data/cutouts.ts as  /cutouts/<name>.png

Deps live in the isolated venv at tools/.venv  (numpy<2, onnxruntime, pillow).
"""
import urllib.request
from pathlib import Path

import numpy as np
import onnxruntime as ort
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "tools" / "source"
OUT_DIR = ROOT / "public" / "cutouts"
MODEL_DIR = ROOT / "tools" / "models"
MODEL_PATH = MODEL_DIR / "u2net.onnx"
MODEL_URL = "https://github.com/danielgatis/rembg/releases/download/v0.0.0/u2net.onnx"
EXTS = {".jpg", ".jpeg", ".png", ".webp"}

MEAN = np.array([0.485, 0.456, 0.406], dtype=np.float32)
STD = np.array([0.229, 0.224, 0.225], dtype=np.float32)
SIZE = 320


def fetch_model():
    if MODEL_PATH.exists():
        return
    MODEL_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Downloading U^2-Net model (~176MB) → {MODEL_PATH} …")
    urllib.request.urlretrieve(MODEL_URL, MODEL_PATH)
    print("  done.")


def mask_for(session, img: Image.Image) -> Image.Image:
    """Return an 'L' alpha mask at the image's original size."""
    inp = img.convert("RGB").resize((SIZE, SIZE), Image.LANCZOS)
    arr = np.array(inp).astype(np.float32) / 255.0
    arr = (arr - MEAN) / STD
    arr = arr.transpose(2, 0, 1)[None].astype(np.float32)  # (1,3,320,320)

    pred = session.run(None, {session.get_inputs()[0].name: arr})[0]
    m = pred[0, 0]
    m = (m - m.min()) / (m.max() - m.min() + 1e-8)
    mask = Image.fromarray((m * 255).astype(np.uint8), mode="L")
    return mask.resize(img.size, Image.LANCZOS)


def main():
    fetch_model()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    sources = sorted(p for p in SRC_DIR.iterdir() if p.suffix.lower() in EXTS)
    if not sources:
        print(f"No source images in {SRC_DIR}. Add files and re-run.")
        return

    session = ort.InferenceSession(str(MODEL_PATH), providers=["CPUExecutionProvider"])
    for src in sources:
        print(f"- {src.name} ...", end=" ", flush=True)
        img = Image.open(src).convert("RGBA")
        alpha = mask_for(session, img)
        img.putalpha(alpha)
        bbox = img.getbbox()  # tight crop to the visible object
        if bbox:
            img = img.crop(bbox)
        out = OUT_DIR / (src.stem + ".png")
        img.save(out)
        print(f"-> public/cutouts/{out.name}  ({img.width}x{img.height})")

    print(f"\nDone - {len(sources)} cut-out(s) in public/cutouts/.")


if __name__ == "__main__":
    main()
