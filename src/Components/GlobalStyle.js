import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Blinker', sans-serif;
    font-size: 14px;
    background-color: #141414;
    color: #ffffff;
    padding-top: 70px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
