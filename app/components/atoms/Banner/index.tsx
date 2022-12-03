import * as S from './styles';

export type BannerProps = {
  text: string;
};

const Banner = ({ text }: BannerProps) => (
  <S.Wrapper>
    <S.Banner>{text}</S.Banner>
  </S.Wrapper>
);

export default Banner;
