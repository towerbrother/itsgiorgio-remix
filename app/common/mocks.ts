import { colors } from './constants';

import type { StageProps } from '~/components/atoms/Stage';
import type { TileProps } from '~/components/atoms/Tile';
import type { HeadlineProps } from '~/components/atoms/Headline';
import type { HeaderProps } from '~/components/molecules/Header';
import type { FooterProps } from '~/components/molecules/Footer';
import type { SectionHeadlineProps } from '~/components/molecules/SectionHeadline';

export const header: HeaderProps = {
  company: { name: 'Tenhil', url: 'https://tenhil.de/' },
  employee: { name: 'Giorgio Torre', role: 'Software Developer' },
  externalLinks: [
    { text: 'Linkedin', url: 'https://linkedin.com/in/giorgiotorre' },
    { text: 'Github', url: 'https://github.com/towerbrother' },
  ],
  internalLinks: [
    { text: 'CV', slug: 'cv' },
    { text: 'Blog', slug: 'blog' },
    { text: 'Projects', slug: 'projects' },
  ],
};

export const footer: FooterProps = {
  areas: [
    [
      {
        type: 'text',
        text: '© 2022 by Giorgio Torre',
      },
    ],
  ],
};

export const sectionHeadline: SectionHeadlineProps = {
  text: 'Skills',
  style: {
    color: colors.offBlack,
    background: colors.secondaryBackground,
  },
};

export const stage: StageProps = {
  greeting: 'Hey',
  presentation: "I'm Giorgio",
};

export const keyWords: Array<HeadlineProps> = [
  {
    tag: 'h5',
    text: 'Communication',
    style: {
      color: colors.offWhite,
      background: colors.secondaryBackground,
    },
  },
  {
    tag: 'h5',
    text: 'Leadership',
    style: {
      color: colors.offWhite,
      background: colors.secondaryBackground,
    },
  },
  {
    tag: 'h5',
    text: 'Frontend',
    style: {
      color: colors.offWhite,
      background: colors.secondaryBackground,
    },
  },
  {
    tag: 'h5',
    text: 'TypeScript',
    style: {
      color: colors.offWhite,
      background: colors.secondaryBackground,
    },
  },
  {
    tag: 'h5',
    text: 'React',
    style: {
      color: colors.offWhite,
      background: colors.secondaryBackground,
    },
  },
  {
    tag: 'h5',
    text: 'NextJs',
    style: {
      color: colors.offWhite,
      background: colors.secondaryBackground,
    },
  },
];

export const cv: Array<TileProps> = [
  {
    startDate: new Date('December 2020'),
    endDate: new Date('December 2022'),
    company: 'Tenhil GmbH & Co. KG',
    role: 'Junior Software Developer',
    responsibilities: ['frontend developement', 'app testing', 'innovation'],
  },
  {
    startDate: new Date('January 2023'),
    endDate: 'ongoing',
    company: 'Tenhil GmbH & Co. KG',
    role: 'Software Developer',
    responsibilities: [
      'frontend developement',
      'app testing',
      'innovation',
      'mentoring',
    ],
  },
  {
    startDate: new Date('December 2020'),
    endDate: new Date('December 2022'),
    company: 'Tenhil GmbH & Co. KG',
    role: 'Junior Software Developer',
    responsibilities: ['frontend developement', 'app testing', 'innovation'],
  },
  {
    startDate: new Date('January 2023'),
    endDate: 'ongoing',
    company: 'Tenhil GmbH & Co. KG',
    role: 'Software Developer',
    responsibilities: [
      'frontend developement',
      'app testing',
      'innovation',
      'mentoring',
    ],
  },
  {
    startDate: new Date('December 2020'),
    endDate: new Date('December 2022'),
    company: 'Tenhil GmbH & Co. KG',
    role: 'Junior Software Developer',
    responsibilities: ['frontend developement', 'app testing', 'innovation'],
  },
  {
    startDate: new Date('January 2023'),
    endDate: 'ongoing',
    company: 'Tenhil GmbH & Co. KG',
    role: 'Software Developer',
    responsibilities: [
      'frontend developement',
      'app testing',
      'innovation',
      'mentoring',
    ],
  },
];
