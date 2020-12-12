import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #9A5CD1;
    --secondary-details: #FCCC4C;
    --dark: #13324E;
    --light: #EDF1F6;
    --danger: #F1C2C2;
    --confirm: #CBEEC2;
    --background: #F9F9F9;
  }

  html,
  body,
  #root {
    height: 100vh;
  }

  body {
    color: var(--dark);
    background: var(--primary);
  }

  body, input, button, textarea {
    font: 600 18px 'Roboto', sans-serif;
  }
`;
