import styled from "styled-components/macro";

const MainContent = styled.div<{ open: boolean }>`
  overflow: hidden;
  max-height: ${(props) => (props.open ? "100vh" : "0vh")};
  transition-property: max-height;
  transition-duration: ${({ theme }) => theme.transitions.long};
`;

export default MainContent;
