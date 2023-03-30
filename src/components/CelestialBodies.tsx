import styled from "styled-components/macro";

export const Sun = styled.div`
  background: url(${({ theme }) => theme.sun}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 15vh;
  height: 15vh;
  position: fixed;
  bottom: ${({ theme }) => (theme.darkMode ? "12vh" : "79vh")};
  left: 10vw;

  opacity: ${({ theme }) => (theme.darkMode ? 0 : 0.8)};
  transition-property: opacity, bottom;
  transition-duration: ${({ theme }) => theme.transitions.long};

  @media only screen and (min-width: 768px) {
  }
`;

export const Moon = styled.div`
  background: url(${({ theme }) => theme.moon}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 13vh;
  height: 13vh;
  position: fixed;
  bottom: ${({ theme }) => (theme.darkMode ? "66vh" : "10vh")};
  left: 66vw;
  // the moon is less bright on mobile so it doesn't interfere with foreground text
  filter: brightness(0.5);

  opacity: ${({ theme }) => (theme.darkMode ? 1 : 0)};
  transition-property: opacity, bottom;
  transition-duration: ${({ theme }) => theme.transitions.long};

  @media only screen and (min-width: 768px) {
    filter: brightness(0.8);
    left: 79vw;
  }
`;
