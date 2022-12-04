import styled from 'styled-components';

import { colors, devices } from '~/common/constants';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0px;

  @media ${devices.tablet} {
    margin: 30px 0px;
  }

  @media ${devices.laptopL} {
    margin: 50px 0px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  opacity: 0.8;
  z-index: 1;
  background-color: ${colors.secondaryBackground};
  height: 70px;

  @media ${devices.tablet} {
    height: 100px;
  }

  @media ${devices.laptop} {
    height: 120px;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  z-index: 2;
  top: 5px;
  width: 85%;

  @media ${devices.mobileM} {
    width: 60%;
  }

  @media ${devices.mobileL} {
    width: 40%;
  }

  @media ${devices.tablet} {
    top: 15px;
    width: 40%;
  }

  @media ${devices.laptop} {
    top: 25px;
    width: 20%;
  }

  @media ${devices.desktop} {
    width: 10%;
  }
`;

export const Title = styled.span`
  font-size: 28px;
  font-weight: 700;

  @media ${devices.tablet} {
    font-size: 36px;
  }

  @media ${devices.laptop} {
    font-size: 42px;
  }

  #Headline {
    padding: 0px 3px;
    color: ${colors.offWhite};
    background-color: ${colors.primaryBackground};
  }
`;
