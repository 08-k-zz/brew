import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root,
  html,
  body {
    line-height: 1.4;
    background-color: #fafafa;
  }
  body {
    font-family: Helvetica, Arial, sans-serif;
  }
  body.fontLoaded {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  }
`;

export default GlobalStyle;
