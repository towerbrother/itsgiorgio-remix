import styled from 'styled-components';
import { NavLink as RemixNavLink } from '@remix-run/react';

import { devices } from '~/common/constants';

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
  color: #fff; // color palette

  &.active {
    color: #15cdfc; // color palette
  }
`;

export const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  font-size: 24px;
  color: #fff; // color palette
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
  background: #256ce1; // color palette
  color: #fff; // color palette

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff; // color palette
    color: #010606; // color palette
  }
`;
