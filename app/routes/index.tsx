import SectionTitle from '~/components/atoms/SectionTitle';
import Stage from '~/components/atoms/Stage';

import { sectionTitle, stage } from '~/common/mocks';

export default function Index() {
  return (
    <>
      <Stage {...stage} />
      <SectionTitle {...sectionTitle} />
    </>
  );
}
