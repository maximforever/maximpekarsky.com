import styled from "styled-components/macro";

const StyledTag = styled.div`
  font-family: "Source Code Pro", monospace;
  padding: 0.2rem 1.4rem;
  background: ${({ theme }) => theme.colors.accentedWhite};
  color: ${({ theme }) => theme.colors.blue};
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.8rem;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.07);

  transition: all ${({ theme }) => theme.transitions.short};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.salmon};
  }
`;

export default StyledTag;
