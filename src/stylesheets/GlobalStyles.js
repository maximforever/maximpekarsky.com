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
  }

  a, a:visited, a:active {
    color: ${({ theme }) => theme.colors.salmon};
    text-decoration: none;
  }

  strong {
    font-weight: 800;
  }

  .App {
    position: relative;
    min-height: 100vh;
    min-width: 350px;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.sansSerif};

    @media only screen and (max-width: 768px) {
      margin: 0;
    }
  }
`;

export default GlobalStylesheet;
