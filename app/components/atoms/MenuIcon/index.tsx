import type { FC } from 'react';

import ConditionalWrapper from '../ConditionalWrapper';

import * as S from './styles';

type MenuIconProps = {
  iconType: 'bars' | 'cross';
  toggle: () => void;
};

const MenuIcon: FC<MenuIconProps> = ({ iconType, toggle }) => (
  <S.MenuIcon onClick={toggle}>
    <ConditionalWrapper condition={iconType === 'bars'}>
      <S.Bars />
    </ConditionalWrapper>
    <ConditionalWrapper condition={iconType === 'cross'}>
      <S.Cross />
    </ConditionalWrapper>
  </S.MenuIcon>
);

export default MenuIcon;
