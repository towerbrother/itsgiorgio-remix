import type { FC } from 'react';
import React from 'react';

import * as S from './styles';

export type SectionTitleProps = {
  text: string;
  highlighted?: string;
};

const useAddIdToHighlightedWord = ({
  text,
  highlighted,
}: SectionTitleProps) => {
  const highlightedSpan = `<span id="highlighted">${highlighted}</span>`;

  return text.replace(highlighted || '', highlightedSpan);
};

const SectionTitle: FC<SectionTitleProps> = ({ text, highlighted }) => {
  const rawText = useAddIdToHighlightedWord({ text, highlighted });

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
