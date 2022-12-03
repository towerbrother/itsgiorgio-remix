import SectionTitle from '~/components/atoms/SectionTitle';
import Stage from '~/components/atoms/Stage';

import { banner, headline, sectionTitle, stage } from '~/common/mocks';
import Banner from '~/components/atoms/Banner';
import Headline from '~/components/atoms/Headline';

export default function Index() {
  return (
    <>
      <Stage {...stage} />
      <Banner {...banner} />
      <Headline {...headline} />
      <SectionTitle {...sectionTitle} />
    </>
  );
}
