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

    min-height: 100vh;
    min-width: 350px;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    width: 100%;
    padding: 5vw 5vw 10rem 5vw;

    position: absolute;
    z-index: 2;

    @media only screen and (min-width: 768px) {
      padding: 2rem 2rem 10rem 2rem;
      margin: 0;
    }
  }
  .beach-scene {
    background: url(${({ theme }) =>
      theme.beachBackground}) no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;

      background-size: cover;
    position: absolute;
    height: 100vh;
    width: 100vw;
    bottom: 0;
    left: 0;
    z-index: 0;
    
    opacity: 0.7;
  }
`;

export default GlobalStylesheet;
