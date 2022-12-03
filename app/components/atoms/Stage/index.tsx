import * as S from './styles';

export type StageProps = {
  greeting: string;
  presentation: string;
};

const Stage = ({ greeting, presentation }: StageProps) => {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Greeting>{greeting},</S.Greeting>
        <S.Presentation>{presentation}.</S.Presentation>
      </S.InnerWrapper>
      <S.Image src="gt-polaroid.png" />
    </S.Wrapper>
  );
};

export default Stage;
