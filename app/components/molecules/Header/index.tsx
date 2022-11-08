import { Link } from '@remix-run/react';
import type { HeaderType } from '~/models/types';
import Navbar from '../Navbar';
import * as S from './styles';

export default function Header({
  company,
  employee,
  externalLinks,
  internalLinks,
}: HeaderType) {
  return (
    <S.Header>
      <S.NameRoleContainer>
        <S.Name>
          <Link to="/">{employee.name}</Link>
        </S.Name>
        <S.Role>
          {employee.role} @{' '}
          <a href={company.url} target="_blank" rel="noreferrer">
            {company.name}
          </a>
        </S.Role>
      </S.NameRoleContainer>
      <Navbar internalLinks={internalLinks} externalLinks={externalLinks} />
    </S.Header>
  );
}
