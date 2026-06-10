// Cut-out objects scattered down the side gutters (edgy "sticker" style).
//
// 1. Put source photos in  tools/source/  and run:  python3 tools/cutout.py
//    → transparent PNGs land in  public/cutouts/
// 2. Add an entry per object below. They render only on wide screens
//    (>1300px) where there's gutter room, behind the centred content.
//
// side   — which gutter the object sits in
// top    — vertical position as % of full page height
// width  — rendered width (px or rem)
// rotate — optional tilt for the hand-placed, cut-out feel

export type Cutout = {
  src: string;
  side: 'left' | 'right';
  top: string;
  width: string;
  rotate?: string;
};

export const cutouts: Cutout[] = [
  { src: '/cutouts/silver-casket.png', side: 'left',  top: '5%',  width: '165px', rotate: '-6deg' },
  { src: '/cutouts/gold-tassel.png',   side: 'right', top: '18%', width: '115px', rotate: '5deg' },
  { src: '/cutouts/carved-jade.png',   side: 'left',  top: '35%', width: '140px', rotate: '7deg' },
  { src: '/cutouts/jade-chain.png',    side: 'right', top: '51%', width: '150px', rotate: '-5deg' },
  { src: '/cutouts/shell-heart.png',   side: 'left',  top: '67%', width: '150px', rotate: '4deg' },
  { src: '/cutouts/copper-dome.png',   side: 'right', top: '82%', width: '130px', rotate: '-8deg' },
];
