import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  height: fit-content;

  @media only screen and (min-width: 740px) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: #fff;
  border: none;

  svg {
    height: 30px;
    width: 30px;
  }
`;
