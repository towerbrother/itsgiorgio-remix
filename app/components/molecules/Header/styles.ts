import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 70px;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 740px) {
    height: 90px;
    padding: 15px 30px;
  }
`;

export const StyledNameRoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledName = styled.span`
  font-weight: 700;
`;

export const StyledRole = styled.span`
  font-size: 14px;

  @media only screen and (min-width: 740px) {
    font-size: 16px;
  }
`;

export const StyledNavbar = styled.nav`
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

  @media only screen and (min-width: 740px) {
    flex-direction: row;
    align-items: center;
    padding: 0;

    a {
      padding: 0px 10px;
    }
  }
`;

export const StyledNavLinksContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  transition: visibility 0.5s ease-in-out, opacity 0.2s ease-in-out;
  background-color: #fff;
  position: relative;
  z-index: 10;

  &.show {
    visibility: visible;
    opacity: 1;
  }

  &.hide {
    visibility: hidden;
    opacity: 0;
  }

  @media only screen and (min-width: 740px) {
    flex-direction: row;
    align-items: center;
    position: unset;

    &.hide {
      visibility: visible;
      opacity: 1;
    }
  }
`;
