import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0px;
    padding: 0px;
    width: 100vw;
    height: 100vh;
  }
  input {
    padding: 0;
    margin: 0;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  },
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    transition: background-color 5000s;
  }
`;
export default GlobalStyle;
