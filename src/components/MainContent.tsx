import styled from "styled-components/macro";

const MainContent = styled.div<{ open: boolean }>`
  overflow: hidden;
  max-height: ${(props) => (props.open ? "100vh" : "0vh")};
  margin-left: ${(props) => (props.open ? "0" : "12vw")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  font-size: ${(props) => (props.open ? "1rem" : "0.3rem")};

  transition: max-height, ${({ theme }) => theme.transitions.long};
  transition: opacity, ${({ theme }) => theme.transitions.long};
  transition: margin-left, ${({ theme }) => theme.transitions.long};
  transition: font-size, ${({ theme }) => theme.transitions.long};

  @media only screen and (min-width: 768px) {
    margin-left: ${(props) => (props.open ? "0" : "32vw")};
  }
`;

export default MainContent;
