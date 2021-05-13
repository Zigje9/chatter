import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    width: 100vw;
    height: 100vh;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
`;
export default GlobalStyle;
