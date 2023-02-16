import { createGlobalStyle } from "styled-components";

const GlobalStylesheet = createGlobalStyle`
  * {
    // add as needed
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    transition: color ${({ theme }) => theme.transitions.short};
    transition: background ${({ theme }) => theme.transitions.short};
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
    font-weight: 800;
  }

  .App {
    margin: 0 auto;
    max-width: 2000px;

    position: relative;
    min-height: 100vh;
    min-width: 350px;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    width: 100%;
    padding: 5vw 5vw 10rem 5vw;

    @media only screen and (min-width: 768px) {
      padding: 2rem 2rem 10rem 2rem;
      margin: 0;
    }
  }
`;

export default GlobalStylesheet;
