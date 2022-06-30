import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --blue: #00ffff;
    --pink: #cd00cd;
    --white: #fff;
    --gray: #e5e5e5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background-image: linear-gradient(to top right, var(--blue), var(--pink));
    background-size: cover;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`
