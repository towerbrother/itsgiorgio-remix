import styled from 'styled-components';
import { colors, devices } from '~/common/constants';

export const Wrapper = styled.div`
  width: 100%;
  margin: 30px 0;
  padding: 15px 8%;
  text-align: center;
  background-color: ${colors.secondaryBackground};

  @media ${devices.tablet} {
    padding: 30px 12%;
  }
`;

export const Banner = styled.span`
  font-size: 36px;
  line-height: 36px;

  @media ${devices.tablet} {
    font-size: 62px;
    line-height: 72px;
  }
`;
