import type { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import type { HeaderProps } from '../Header';
import MenuIcon from '../../atoms/MenuIcon';

import * as S from './styles';

type SidebarProps = Partial<HeaderProps> & {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar: FC<SidebarProps> = ({
  externalLinks,
  internalLinks,
  isOpen,
  toggle,
}) => {
  return (
    <S.Sidebar isOpen={isOpen} onClick={toggle}>
      <MenuIcon iconType="cross" toggle={toggle} />
      <S.SidebarWrapper>
        <S.SidebarMenu>
          <S.InternalLink to="/">Home</S.InternalLink>
          {internalLinks?.map((link) => (
            <S.InternalLink key={uuidv4()} to={link.slug}>
              {link.text}
            </S.InternalLink>
          ))}
          {externalLinks?.map((link) => (
            <S.ExternalLink
              key={uuidv4()}
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </S.ExternalLink>
          ))}
        </S.SidebarMenu>
        <S.SidebarButtonWrapper>
          <S.SidebarButtonLink to="/contact">Contact</S.SidebarButtonLink>
        </S.SidebarButtonWrapper>
      </S.SidebarWrapper>
    </S.Sidebar>
  );
};

export default Sidebar;
