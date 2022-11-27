import styled from 'styled-components';
import { NavLink as RemixNavLink } from '@remix-run/react';

import { devices, colors } from '~/common/constants';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  z-index: 1;
`;

export const NavbarMenu = styled.div`
  display: none;

  @media ${devices.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const InternalLink = styled(RemixNavLink)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  color: ${colors.offBlack};

  &.active {
    color: ${colors.secondaryBackground};
  }
`;

export const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  font-size: 24px;
  color: ${colors.offBlack};
`;

export const NavbarButtonWrapper = styled.div`
  display: none;

  @media ${devices.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const NavbarButtonLink = styled(RemixNavLink)`
  transition: all 0.2s ease-in-out;
  padding: 8px 10px;
  border-radius: 8px;
  background: ${colors.primaryBackground};
  color: ${colors.offWhite};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.offWhite};
    color: ${colors.primaryBackground};
  }
`;
