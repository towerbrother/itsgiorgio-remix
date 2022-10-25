import { Link, NavLink } from '@remix-run/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BurgerMenuIcon from '../BurgerMenuIcon';
import {
  StyledHeader,
  StyledNameRoleContainer,
  StyledName,
  StyledRole,
  StyledNavbar,
  StyledNavLinksContainer,
} from './styles';

export type HeaderType = {
  company: { name: string; url: string };
  employee: { name: string; role: string };
  externalLinks: [{ text: string; url: string }];
  internalLinks: [{ text: string; slug: string }];
};

export default function Header({
  company,
  employee,
  externalLinks,
  internalLinks,
}: HeaderType) {
  const [show, setShow] = useState(false);

  return (
    <StyledHeader>
      <StyledNameRoleContainer>
        <StyledName>
          <Link to="/">{employee.name}</Link>
        </StyledName>
        <StyledRole>
          {employee.role} @ <a href={company.url}>{company.name}</a>
        </StyledRole>
      </StyledNameRoleContainer>
      <StyledNavbar>
        <BurgerMenuIcon show={show} setShow={setShow} />
        <StyledNavLinksContainer className={show ? 'show' : 'hide'}>
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
        </StyledNavLinksContainer>
      </StyledNavbar>
    </StyledHeader>
  );
}
