import styled from 'styled-components';

import { devices } from '~/common/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: center;
  }

  @media ${devices.laptop} {
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 48px;
  margin: 0 0 20px 0;

  @media ${devices.tablet} {
    font-size: 60px;
    margin: 0px;
  }

  @media ${devices.laptop} {
    font-size: 72px;
  }
`;

export const Greeting = styled.span``;

export const Presentation = styled.span`
  font-weight: 700;
  margin: -10px 0px 0px 20px;

  @media ${devices.tablet} {
    margin: -20px 0px 0px 50px;
  }
`;

export const Image = styled.img`
  height: auto;
  width: 285px;
  transform: rotate(0);
  margin: 0;

  @media ${devices.tablet} {
    width: 350px;
    transform: rotate(3deg);
    margin-top: 40px;
  }

  @media ${devices.laptop} {
    width: 450px;
  }
`;
