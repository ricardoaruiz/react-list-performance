import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
  }
  
  button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }

  .animate__animated.animate__hinge {
    --animate-duration: 0.8s;
  }

`