import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-top: 10px;

  a {
    padding: 8px 10px;

    svg {
      height: 30px;
      width: 30px;
    }
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 200px;
  padding-top: 100px;
  background-color: #000;
  z-index: 5;
  transition: visibility 0.5s ease-in-out, opacity 0.2s ease-in-out;

  &.show {
    visibility: visible;
    opacity: 1;
  }

  &.hide {
    visibility: hidden;
    opacity: 0;
  }

  a {
    color: #fff;
  }
`;
