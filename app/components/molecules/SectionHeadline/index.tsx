import type { Style } from '~/components/atoms/Highlighted';
import Highlighted from '~/components/atoms/Highlighted';
import * as S from './styles';

export type SectionHeadlineProps = {
  text: string;
  style: Style;
};

const SectionHeadline = (props: SectionHeadlineProps) => {
  return (
    <S.Wrapper>
      <Highlighted tag="h2" {...props} />
    </S.Wrapper>
  );
};

export default SectionHeadline;
