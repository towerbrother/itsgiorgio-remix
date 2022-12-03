import * as S from './styles';

export type HeadlineProps = {
  text: string;
};

const Headline = ({ text }: HeadlineProps) => (
  <S.HeadlineWrapper>
    <S.Headline>{text}</S.Headline>
  </S.HeadlineWrapper>
);

export default Headline;
