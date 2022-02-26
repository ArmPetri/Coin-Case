import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #000D2A;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.04rem;
    line-height: 1.2rem;
    font-weight: 300;
    width: 100vw;
    overflow-x: hidden;
    position: ${props => props.position};
  }

  input {
    all: unset;
  }
`
export default GlobalStyles
