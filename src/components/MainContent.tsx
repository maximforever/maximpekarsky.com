import styled from "styled-components/macro";

const MainContent = styled.div<{ open: boolean }>`
  overflow: hidden;
  max-height: ${(props) => (props.open ? "100vh" : "0vh")};
  transition: max-height, ${({ theme }) => theme.transitions.short};
`;

export default MainContent;
