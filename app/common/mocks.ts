import type { HeaderProps } from '~/components/molecules/Header';
import type { FooterProps } from '~/components/molecules/Footer';
import type { SectionTitleProps } from '~/components/atoms/SectionTitle';

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
