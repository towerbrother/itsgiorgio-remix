import type { HeaderProps } from '~/components/molecules/Header';
import type { FooterProps } from '~/components/molecules/Footer';
import type { StageProps } from '~/components/atoms/Stage';
import type { HighlightedProps } from '~/components/atoms/Highlighted';
import type { SectionHeadlineProps } from '~/components/molecules/SectionHeadline';

import { colors } from './constants';

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

export const keyWords: Array<HighlightedProps> = [
  {
    tag: 'h6',
    text: 'Communication',
    style: {
      color: colors.offWhite,
      background: colors.secondaryBackground,
    },
  },
  {
    tag: 'h6',
    text: 'Leadership',
    style: {
      color: colors.offWhite,
      background: colors.secondaryBackground,
    },
  },
  {
    tag: 'h6',
    text: 'Frontend',
    style: {
      color: colors.offWhite,
      background: colors.secondaryBackground,
    },
  },
  {
    tag: 'h6',
    text: 'TypeScript',
    style: {
      color: colors.offWhite,
      background: colors.secondaryBackground,
    },
  },
  {
    tag: 'h6',
    text: 'React',
    style: {
      color: colors.offWhite,
      background: colors.secondaryBackground,
    },
  },
  {
    tag: 'h6',
    text: 'NextJs',
    style: {
      color: colors.offWhite,
      background: colors.secondaryBackground,
    },
  },
];
