import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import ConditionalWrapper from '~/components/atoms/ConditionalWrapper';

import * as S from './styles';

type Item = {
  type: 'text' | 'link';
  text: string;
  link?: string;
};

type Area = Array<Item>;

export type FooterProps = {
  areas: Array<Area>;
};

const Footer = ({ areas }: FooterProps) => (
  <S.Footer isSingleArea={areas.length === 1}>
    {areas.map((area: Area) => (
      <S.Area key={uuidv4()}>
        {area.map((item: Item) => (
          <React.Fragment key={uuidv4()}>
            <ConditionalWrapper condition={item.type === 'text'}>
              <S.Text>{item.text}</S.Text>
            </ConditionalWrapper>
            <ConditionalWrapper condition={item.type === 'link'}>
              <S.Link to={item.link || '/'}>{item.text}</S.Link>
            </ConditionalWrapper>
          </React.Fragment>
        ))}
      </S.Area>
    ))}
  </S.Footer>
);

export default Footer;
