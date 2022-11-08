import BurgerMenuIcon from '../BurgerMenuIcon';
import { NavLink } from '@remix-run/react';
import { v4 as uuidv4 } from 'uuid';
import * as S from './styles';
import { useState } from 'react';
import type { INavbarProps } from './types';

export default function Navbar({ externalLinks, internalLinks }: INavbarProps) {
  const [show, setShow] = useState(false);

  return (
    <S.Navbar>
      <BurgerMenuIcon setShow={setShow} />
      <S.NavLinksContainer className={show ? 'show' : 'hide'}>
        {internalLinks.map((link) => (
          <NavLink key={uuidv4()} to={link.slug}>
            {link.text}
          </NavLink>
        ))}
        {externalLinks.map((link) => (
          <a key={uuidv4()} href={link.url} target="_blank" rel="noreferrer">
            {link.text}
          </a>
        ))}
      </S.NavLinksContainer>
    </S.Navbar>
  );
}
