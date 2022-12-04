import { v4 as uuidv4 } from 'uuid';

import type { HeadlineProps } from '~/components/atoms/Headline';
import Headline from '~/components/atoms/Headline';

import * as S from './styles';

type KeyWordsProps = {
  keywords: Array<HeadlineProps>;
};

const KeyWords = ({ keywords }: KeyWordsProps) => {
  return (
    <S.Wrapper>
      {Array.from(keywords).map((keyword: HeadlineProps) => (
        <S.WordContainer key={uuidv4()}>
          <Headline {...keyword} />
        </S.WordContainer>
      ))}
    </S.Wrapper>
  );
};

export default KeyWords;
