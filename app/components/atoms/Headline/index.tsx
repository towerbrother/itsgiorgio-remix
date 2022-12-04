import * as S from './styles';

type Headlines = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type Style = {
  color?: string;
  background?: string;
  padding?: string;
};

export type HeadlineProps = {
  text: string;
  tag: Headlines;
  style: Style;
};

const getHeadline = ({ tag, text, style }: HeadlineProps) => {
  const element = <S.Text {...style}>{text}</S.Text>;

  switch (tag) {
    case 'h1':
      return <S.H1>{element}</S.H1>;
    case 'h2':
      return <S.H2>{element}</S.H2>;
    case 'h3':
      return <S.H3>{element}</S.H3>;
    case 'h4':
      return <S.H4>{element}</S.H4>;
    case 'h5':
      return <S.H5>{element}</S.H5>;
    case 'h6':
      return <S.H6>{element}</S.H6>;
  }
};

const Headline = ({ tag, text, style }: HeadlineProps) => {
  return <>{getHeadline({ tag, text, style })}</>;
};

export default Headline;
