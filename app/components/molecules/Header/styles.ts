import styled from 'styled-components';
import { devices } from '../../../common/constants';

export const Header = styled.header`
  height: 70px;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

  @media ${devices.tablet} {
    height: 90px;
    padding: 15px 30px;
  }
`;

export const NameRoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.span`
  font-weight: 700;
`;

export const Role = styled.span`
  font-size: 14px;

  @media ${devices.tablet} {
    font-size: 16px;
  }
`;
