import styled from 'styled-components';

import { devices } from '~/common/constants';

export const NameRoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.span`
  font-weight: 700;
  color: #fff;
`;

export const Role = styled.span`
  font-size: 14px;
  color: #fff;

  @media ${devices.tablet} {
    font-size: 16px;
  }
`;

export const Company = styled.a``;
