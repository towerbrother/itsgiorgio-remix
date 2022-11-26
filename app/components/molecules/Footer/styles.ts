import { Link as RemixLink } from '@remix-run/react';
import styled from 'styled-components';

import { devices } from '~/common/constants';

type StyledFooterProps = { isSingleArea: boolean };

export const Footer = styled.footer<StyledFooterProps>`
  display: flex;
  justify-content: ${({ isSingleArea }) =>
    isSingleArea ? 'center' : 'space-between'};
  padding: 15px;
`;

export const Area = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Text = styled.span`
  font-size: 11px;
  margin: 10px 6px;

  @media ${devices.tablet} {
    font-size: 16px;
  }
`;

export const Link = styled(RemixLink)`
  font-size: 11px;
  margin: 10px 6px;

  @media ${devices.tablet} {
    font-size: 16px;
  }
`;
