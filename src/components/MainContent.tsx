import styled from "styled-components/macro";

const MainContent = styled.div<{ open: boolean }>`
  overflow: hidden;
  max-height: ${(props) => (props.open ? "1000vh" : "0vh")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  font-size: ${(props) => (props.open ? "1rem" : "0")};

  transition: max-height, ${({ theme }) => theme.transitions.long};
  transition: opacity, ${({ theme }) => theme.transitions.long};
  transition: margin-left, ${({ theme }) => theme.transitions.veryLong};
  transition: font-size, ${({ theme }) => theme.transitions.long};
`;

export default MainContent;
