// All site content lives here so the page templates stay clean.
// Edit copy, roles, and links in this one file. Source: Sophie Morris CV 2026.

export const profile = {
  name: 'Sophie Morris',
  title: 'Curator & Historian of Art',
  tagline:
    'Curator and historian of visual and material culture, with specialist interests in decorative art and jewellery.',
  location: 'London, United Kingdom',
  email: 'sophieelisabethmorris@gmail.com',
  instagram: 'https://www.instagram.com/powersofthehoard/',
  instagramHandle: '@powersofthehoard',
  intro: [
    'Dr Sophie Morris is a curator and historian of visual and material culture, with specialist interests in decorative art and jewellery. As Curator of the Rosalinde & Arthur Gilbert Collection at the V&A, she led a four-year redevelopment of seven permanent galleries — awarded five stars by The Guardian — alongside international exhibitions, loans, and public programming. She holds an AHRC-funded PhD from UCL and is co-editor of Elemental Forces in Early Modern Culture (forthcoming, Brill).',
  ],
};

export type Role = {
  title: string;
  period: string;
  detail?: string;
};

export type ExperienceGroup = {
  organisation: string;
  meta?: string;
  location?: string;
  roles: Role[];
};

// Publications & projects rank highly — newest first.
export type Publication = {
  year: string;
  title: string;
  outlet: string;
  role: string;
  url?: string;
};

export const publications: Publication[] = [
  {
    year: '2027',
    title:
      'Elemental Forces in Early Modern Culture: Properties, Combinations, and Transformations',
    outlet: 'Eds. Zorach, Swan, Allington-Wood & Morris · Brill (forthcoming)',
    role: 'Co-editor & contributing author',
  },
  {
    year: '2026',
    title: '“Jet Power”',
    outlet: 'Jewellery History Today, Issue 55, Winter',
    role: 'Author',
  },
  {
    year: '2025',
    title: '“Unboxing Real Shipwrecked Treasure and Archaeological Jewellery”',
    outlet: 'Victoria and Albert Museum · YouTube',
    role: 'Presenter',
  },
  {
    year: '2025',
    title: 'Lives of the Great Makers: 500 Years of Creative Excellence',
    outlet: 'Thames & Hudson / V&A',
    role: 'Contributing author — chapters on “The Castellani” and “Charlotte de Syllas”',
  },
  {
    year: '2025',
    title: '“The Enduring Appeal of Micromosaic Jewellery”',
    outlet: 'Jewellery History Today, Issue 52, Winter',
    role: 'Author',
  },
  {
    year: '2024',
    title: 'Le Goût de la Renaissance: Un dialogue entre collections',
    outlet: 'Centre des monuments nationaux, Paris',
    role: 'Contributing author — “Succession: Crafting and Collecting Ancestral Hardstones in Renaissance Europe”',
  },
  {
    year: '2024',
    title: '“An A to Z of Gemstones”',
    outlet: 'Victoria and Albert Museum · Web article',
    role: 'Author',
  },
  {
    year: '2024',
    title: '“A Brief History of Powerful Gemstone Amulets”',
    outlet: 'Victoria and Albert Museum · YouTube',
    role: 'Presenter',
    url: 'https://www.youtube.com/watch?v=kqa09KH4weQ',
  },
  {
    year: '2023',
    title: 'Eternal Medium: Seeing the World in Stone',
    outlet: 'Los Angeles County Museum of Art (LACMA)',
    role: 'Contributing author & exhibition research assistant',
  },
  {
    year: '2023',
    title:
      'The Art of Stone: Masterpieces from the Rosalinde & Arthur Gilbert Collection',
    outlet: 'V&A Publishing',
    role: 'Contributing author',
  },
  {
    year: '2023',
    title: '“Questioning our Values: Interview with Francesca DiMattio”',
    outlet: 'Ceramic Review',
    role: 'Author',
  },
  {
    year: '2021',
    title: '“Elemental Forces” conference',
    outlet: 'The Newberry, Chicago',
    role: 'Co-organiser',
  },
  {
    year: '2013',
    title:
      'About Face: 17th-Century Portrait Miniatures & Drawings from the Royal Collection',
    outlet: 'The Barber Institute of Fine Arts',
    role: 'Co-curator',
  },
];

export const experience: ExperienceGroup[] = [
  {
    organisation: 'Victoria and Albert Museum',
    meta: '2020 – 2026',
    location: 'London',
    roles: [
      {
        title:
          'Curator, Arthur & Rosalinde Gilbert Collection (Decorative Art & Sculpture)',
        period: '2023 – 2026',
      },
      {
        title: 'Assistant Curator, Arthur & Rosalinde Gilbert Collection',
        period: '2022 – 2023',
      },
      {
        title: 'Researcher to the Director & Deputy Director',
        period: '2020 – 2022',
      },
    ],
  },
  {
    organisation: 'De Montfort University',
    meta: '2019',
    roles: [
      {
        title: 'Postdoctoral Research Assistant',
        period: '2019',
        detail: '“Digital Heritage in Cultural Conflicts” Consortium.',
      },
    ],
  },
  {
    organisation: 'University College London',
    meta: '2014 – 2017',
    roles: [
      {
        title: 'Postgraduate Teaching Assistant, Department of History of Art',
        period: '2014 – 2017',
      },
    ],
  },
  {
    organisation: 'Earlier roles',
    meta: '2010 – 2015',
    roles: [
      {
        title: 'Galleries, auction houses & collections',
        period: '2010 – 2015',
        detail:
          'Freelance Researcher, Christie’s; Collections Assistant, The Barber Institute of Fine Arts; Intern, Sculpture Department, V&A; Research & Provenance Intern, Impressionist & Modern Art, Sotheby’s London.',
      },
    ],
  },
];

export const film = {
  title: 'A Brief History of Powerful Gemstone Amulets',
  publisher: 'Victoria and Albert Museum',
  youtubeId: 'kqa09KH4weQ',
  url: 'https://www.youtube.com/watch?v=kqa09KH4weQ',
  note: 'A short film for the V&A tracing the history of gemstones long believed to hold protective and talismanic power.',
};

export const education = [
  {
    institution: 'University College London',
    qualification: 'PhD, History of Art',
    period: '2019',
    detail: 'AHRC-funded',
  },
  {
    institution: 'University College London',
    qualification: 'MA, History of Art',
    period: '2012',
    detail: 'Distinction',
  },
  {
    institution: 'University College London',
    qualification: 'BA, History of Art',
    period: '2011',
    detail: 'First-class Honours',
  },
];

export const fellowships = [
  {
    period: '2017 – 18',
    text: 'AHRC International Placement Scheme Fellowship, Yale Center for British Art',
  },
  {
    period: '2016',
    text: 'Robert R. Wark Fellowship, The Huntington Library & Art Collection',
  },
  {
    period: '2016',
    text: 'Research Travel Grant, Paul Mellon Centre for Studies in British Art',
  },
  {
    period: '2013 – 16',
    text: 'AHRC PhD Studentship, University College London',
  },
];
