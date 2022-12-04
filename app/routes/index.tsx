import { keyWords, sectionHeadline, stage, cv } from '~/common/mocks';

import Stage from '~/components/atoms/Stage';
import KeyWords from '~/components/molecules/KeyWords';
import SectionHeadline from '~/components/molecules/SectionHeadline';
import Timeline from '~/components/molecules/Timeline';

export default function Index() {
  return (
    <>
      <Stage {...stage} />
      <SectionHeadline {...sectionHeadline} />
      <KeyWords keywords={keyWords} />
      <Timeline tiles={cv} />
    </>
  );
}
