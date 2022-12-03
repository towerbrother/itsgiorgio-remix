import { keyWords, sectionHeadline, stage } from '~/common/mocks';

import Stage from '~/components/atoms/Stage';
import KeyWords from '~/components/molecules/KeyWords';
import SectionHeadline from '~/components/molecules/SectionHeadline';

export default function Index() {
  return (
    <>
      <Stage {...stage} />
      <SectionHeadline {...sectionHeadline} />
      <KeyWords keywords={keyWords} />
    </>
  );
}
