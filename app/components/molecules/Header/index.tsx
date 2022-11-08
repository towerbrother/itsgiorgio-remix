import { Link, NavLink } from '@remix-run/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { HeaderType } from '~/models/types';
import BurgerMenuIcon from '../BurgerMenuIcon';
import * as S from './styles';

export default function Header({
  company,
  employee,
  externalLinks,
  internalLinks,
}: HeaderType) {
  const [show, setShow] = useState(false);

  return (
    <S.StyledHeader>
      <S.StyledNameRoleContainer>
        <S.StyledName>
          <Link to="/">{employee.name}</Link>
        </S.StyledName>
        <S.StyledRole>
          {employee.role} @ <a href={company.url}>{company.name}</a>
        </S.StyledRole>
      </S.StyledNameRoleContainer>
      <S.StyledNavbar>
        <BurgerMenuIcon setShow={setShow} />
        <S.StyledNavLinksContainer className={show ? 'show' : 'hide'}>
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
        </S.StyledNavLinksContainer>
      </S.StyledNavbar>
    </S.StyledHeader>
  );
}
