import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  height: fit-content;
  position: relative;
  z-index: 10;

  button {
    border: none;
    transition: background-color 0.5s ease-in-out;

    &.show {
      background-color: #000;
    }

    &.hide {
      background-color: #fff;
    }

    svg {
      height: 30px;
      width: 30px;
      transition: fill 0.5s ease-in-out;

      &.show {
        fill: #fff;
      }

      &.hide {
        fill: #000;
      }
    }
  }
`;
