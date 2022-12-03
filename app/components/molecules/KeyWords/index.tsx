import { v4 as uuidv4 } from 'uuid';

import type { HighlightedProps } from '~/components/atoms/Highlighted';
import Highlighted from '~/components/atoms/Highlighted';

import * as S from './styles';

type KeyWordsProps = {
  keywords: Array<HighlightedProps>;
};

const KeyWords = ({ keywords }: KeyWordsProps) => {
  return (
    <S.Wrapper>
      {Array.from(keywords).map((keyword: HighlightedProps) => (
        <S.WordContainer key={uuidv4()}>
          <Highlighted {...keyword} />
        </S.WordContainer>
      ))}
    </S.Wrapper>
  );
};

export default KeyWords;
