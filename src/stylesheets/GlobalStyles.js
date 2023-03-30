import { createGlobalStyle } from "styled-components";

const GlobalStylesheet = createGlobalStyle`
  * {
    // add as needed
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.white};
    //background: url(${({ theme }) =>
      theme.backgroundPhoto}) no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    color: ${({ theme }) => theme.colors.black};
    transition: color ${({ theme }) => theme.transitions.short};
    transition: background ${({ theme }) => theme.transitions.short};

    font-weight: 500;
  }

  .preload {
    transition: none;
  }

  a, a:visited, a:active {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => theme.colors.salmon};
    }
  }

  strong {
    font-weight: 700;
  }

  .App {
    margin: 0 auto;
    max-width: 2000px;

    // this max-height is preventing a nice folding animation, but making it 150vh
    // hides the content
    max-height: 1000vh;
    min-width: 350px;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    width: 100%;
    padding: 5vw 5vw 10rem 5vw;

    position: absolute;
    z-index: 3;

    @media only screen and (min-width: 768px) {
      padding: 2rem 2rem 0 2rem;
      margin: 0;
    }
  }
  .beach-scene {
    // try for a mobile background here
    background: url(${({ theme }) =>
      theme.beachBackground}) no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;

    background-size: cover;
    position: fixed;
    height: 100vh;
    width: 100vw;
    bottom: 0;
    left: 0;
    z-index: 2;

    opacity: 0.5;
    /* filter: brightness(${({ theme }) => (theme.darkMode ? 0.5 : 1)};)
    transition-property: filter;
    transition-duration: ${({ theme }) => theme.transitions.long}; */

    @media only screen and (min-width: 768px) {
      background: url(${({ theme }) =>
        theme.beachBackground}) no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
    }
  }

  .celestial-body {
    background: url(${({ theme }) =>
      theme.celestialBody}) no-repeat center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
    width: 13vh;
    height: 13vh;
    position: absolute;
    top: ${({ theme }) => (theme.darkMode ? "21vh" : "10vh")};
    left: ${({ theme }) => (theme.darkMode ? "79vw" : "10vw")};
    z-index: 1;
  }

  .sun {
    background: url(${({ theme }) => theme.sun}) no-repeat center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
    width: 13vh;
    height: 13vh;
    position: absolute;
    top: "21vh";
    left: "79vw";
  }
`;
export default GlobalStylesheet;
