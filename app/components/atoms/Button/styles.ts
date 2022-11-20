import styled from 'styled-components';
import { devices } from '~/common/constants';

export const Button = styled.button`
  background-color: #000; // color palette
  color: #fff; // color palette
  padding: 5px 15px;
  height: auto;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  @media ${devices.tablet} {
    font-size: 18px;
  }
`;
