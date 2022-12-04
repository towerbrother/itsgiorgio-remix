import * as S from './styles';

export type SectionTitleProps = {
  text: string;
  Headline?: string;
};

const useAddIdToHeadlineWord = ({ text, Headline }: SectionTitleProps) => {
  const HeadlineSpan = `<span id="Headline">${Headline}</span>`;

  return text.replace(Headline || '', HeadlineSpan);
};

const SectionTitle = ({ text, Headline }: SectionTitleProps) => {
  const rawText = useAddIdToHeadlineWord({ text, Headline });

  return (
    <S.Wrapper>
      <S.Background />
      <S.TitleContainer>
        <S.Title dangerouslySetInnerHTML={{ __html: rawText }} />
      </S.TitleContainer>
    </S.Wrapper>
  );
};

export default SectionTitle;
