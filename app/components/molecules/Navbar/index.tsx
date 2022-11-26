import type { FC } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

import type { HeaderProps } from '../Header';
import MenuIcon from '../../atoms/MenuIcon';
import NameRole from '../../atoms/NameRole';

import * as S from './styles';
import ConditionalWrapper from '~/components/atoms/ConditionalWrapper';

type NavbarProps = HeaderProps & {
  toggle: () => void;
};

const Navbar: FC<NavbarProps> = ({
  company,
  employee,
  externalLinks,
  internalLinks,
  toggle,
}) => (
  <S.Navbar>
    <NameRole company={company} employee={employee} />
    <MenuIcon iconType="bars" toggle={toggle} />
    <S.NavbarMenu>
      {internalLinks.map((link) => (
        <S.InternalLink key={uuidv4()} to={link.slug}>
          {link.text}
        </S.InternalLink>
      ))}
      {externalLinks.map((link) => (
        <S.ExternalLink
          key={uuidv4()}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          <ConditionalWrapper
            condition={link.text.toLowerCase() === 'linkedin'}
          >
            <FaLinkedin />
          </ConditionalWrapper>
          <ConditionalWrapper condition={link.text.toLowerCase() === 'github'}>
            <FaGithub />
          </ConditionalWrapper>
        </S.ExternalLink>
      ))}
    </S.NavbarMenu>
    <S.NavbarButtonWrapper>
      <S.NavbarButtonLink to="/contact">Contact</S.NavbarButtonLink>
    </S.NavbarButtonWrapper>
  </S.Navbar>
);

export default Navbar;
