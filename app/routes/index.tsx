import SectionTitle from '~/components/atoms/SectionTitle';
import Stage from '~/components/atoms/Stage';

import { banner, sectionTitle, stage } from '~/common/mocks';
import Banner from '~/components/atoms/Banner';

export default function Index() {
  return (
    <>
      <Stage {...stage} />
      <Banner {...banner} />
      <SectionTitle {...sectionTitle} />
    </>
  );
}
