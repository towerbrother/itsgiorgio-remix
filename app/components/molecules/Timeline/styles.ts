import styled from 'styled-components';

import { devices } from '~/common/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  margin: 0 auto;
  width: 90%;

  @media ${devices.tablet} {
    width: 70%;
  }
`;
