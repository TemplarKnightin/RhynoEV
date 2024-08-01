import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Calibri', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #FAFAFA;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
