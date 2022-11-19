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
  padding-top: 100px;
  background-color: #000;
  z-index: 5;
  transition-property: visibility, opacity, width;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;

  &.show {
    visibility: visible;
    opacity: 1;
    width: 250px;
  }

  &.hide {
    visibility: hidden;
    opacity: 0;
    width: 0px;
  }

  a {
    color: #fff;
  }
`;
