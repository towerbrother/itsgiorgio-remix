import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:before{
      box-sizing: border-box;
    } 
    
    &:after{
      box-sizing: border-box;
    }
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #202020;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select,
  a {
    font: inherit;
    cursor: pointer;
    color: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  a {
    text-decoration: none;

    &:hover {
      opacity: 0.6;

    }
  }
`;
