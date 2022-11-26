import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

type SidebarProps = {
  isOpen: boolean;
};

export const Sidebar = styled.aside<SidebarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
  z-index: 10;
  background: #0d0d0d; // color palette
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75%;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
`;

export const InternalLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 20px;
  color: #fff; // color palette
`;

export const ExternalLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 20px;
  color: #fff; // color palette
`;

export const SidebarButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarButtonLink = styled(NavLink)`
  transition: all 0.2s ease-in-out;
  padding: 16px 42px;
  border-radius: 50px;
  background: #256ce1; // color palette
  color: #fff; // color palette

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff; // color palette
    color: #010606; // color palette
  }
`;
