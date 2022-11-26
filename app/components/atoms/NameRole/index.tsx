import type { FC } from 'react';
import { NavLink } from '@remix-run/react';

import type { HeaderProps } from '~/components/molecules/Header';

import * as S from './styles';

type NameRoleProps = Partial<HeaderProps>;

const NameRole: FC<NameRoleProps> = ({ company, employee }) => {
  return (
    <S.NameRoleContainer>
      <S.Name>
        <NavLink to="/">{employee?.name}</NavLink>
      </S.Name>
      <S.Role>
        {employee?.role} @{' '}
        <S.Company href={company?.url} target="_blank" rel="noreferrer">
          {company?.name}
        </S.Company>
      </S.Role>
    </S.NameRoleContainer>
  );
};

export default NameRole;
