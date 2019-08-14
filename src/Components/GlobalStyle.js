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
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --h_width: 250px;
    --h_height: calc(var(--h_width) / (16 / 9));
    --h_scale: 1.2;
    --v_width: 180px;
    --v_height: calc(var(--v_width) / (2 / 3));
    --v_scale: 1.1;
  }
`;

export default GlobalStyle;
