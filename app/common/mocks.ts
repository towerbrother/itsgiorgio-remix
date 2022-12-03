import type { HeaderProps } from '~/components/molecules/Header';
import type { FooterProps } from '~/components/molecules/Footer';
import type { SectionTitleProps } from '~/components/atoms/SectionTitle';
import type { StageProps } from '~/components/atoms/Stage';
import type { BannerProps } from '~/components/atoms/Banner';
import type { HeadlineProps } from '~/components/atoms/Headline';

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

export const sectionTitle: SectionTitleProps = {
  text: 'What others say about me',
  highlighted: 'others',
};

export const stage: StageProps = {
  greeting: 'Hey',
  presentation: "I'm Giorgio",
};

export const banner: BannerProps = {
  text: 'Hello, I am a very nice Banner ready to be used!',
};

export const headline: HeadlineProps = {
  text: 'Skills',
};
