// Cut-out objects scattered down the side gutters (edgy "sticker" style).
//
// 1. Put source photos in  tools/source/  and run:  python3 tools/cutout.py
//    → transparent PNGs land in  public/cutouts/
// 2. Add an entry per object below. They render only on wide screens
//    (>1300px) where there's gutter room, behind the centred content.
//
// side   — which gutter the object sits in
// top    — vertical position as % of the VIEWPORT height (the layer is
//          pinned to the viewport on wide screens — see .cutout-layer)
// width  — rendered width (px or rem)
// rotate — optional tilt for the hand-placed, cut-out feel
//
// Layout: objects spread evenly down both side gutters, alternating sides,
// framing the centred content. The layer is fixed to the viewport on wide
// screens so they stay tidy regardless of how tall the page is.

export type Cutout = {
  src: string;
  side: 'left' | 'right';
  top: string;
  width: string;
  rotate?: string;
};

export const cutouts: Cutout[] = [
  // Left gutter — 4 objects, evenly spaced within a safe band so nothing
  // clips against the top/bottom viewport edges.
  { src: '/cutouts/amber-reliquary.png',   side: 'left',  top: '6%',  width: '95px',  rotate: '-6deg' },
  { src: '/cutouts/amethyst-empress.png',  side: 'left',  top: '28%', width: '60px',  rotate: '4deg' },
  { src: '/cutouts/turquoise-box.png',     side: 'left',  top: '50%', width: '125px', rotate: '7deg' },
  { src: '/cutouts/silver-fireback.png',   side: 'left',  top: '72%', width: '135px', rotate: '5deg' },
  // Right gutter — 5 objects (the shorter pieces), same safe band.
  { src: '/cutouts/jet-cupids.png',        side: 'right', top: '8%',  width: '130px', rotate: '5deg' },
  { src: '/cutouts/coral-flasks.png',      side: 'right', top: '25%', width: '120px', rotate: '-5deg' },
  { src: '/cutouts/silver-bruidshart.png', side: 'right', top: '43%', width: '68px',  rotate: '-6deg' },
  { src: '/cutouts/turquoise-snuff.png',   side: 'right', top: '61%', width: '100px', rotate: '-8deg' },
  { src: '/cutouts/holy-water-stoup.png',  side: 'right', top: '78%', width: '75px',  rotate: '3deg' },
];
