import type { Style } from '~/components/atoms/Headline';
import Headline from '~/components/atoms/Headline';
import * as S from './styles';

export type SectionHeadlineProps = {
  text: string;
  style: Style;
};

const SectionHeadline = (props: SectionHeadlineProps) => {
  return (
    <S.Wrapper>
      <Headline tag="h2" {...props} />
    </S.Wrapper>
  );
};

export default SectionHeadline;
