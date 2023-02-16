import DarkModeToggle from "./DarkModeToggle";
import { PageType } from "../types";
import styled from "styled-components/macro";

const StyledHeader = styled.header<{ open: boolean }>`
  margin-top: ${(props) => (props.open ? "0vh" : "40vh")};
  margin-left: ${(props) => (props.open ? "0vw" : "12vw")};
  text-align: ${(props) => (props.open ? "left" : "center")};

  padding-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  transition: margin-top, margin-left;
  transition-duration: ${({ theme }) => theme.transitions.long};

  @media only screen and (min-width: 768px) {
    margin-top: ${(props) => (props.open ? "0vh" : "40vh")};
    margin-left: ${(props) => (props.open ? "0vw" : "32vw")};
  }
`;

const HeadingWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.salmon};
    }
  }
`;

const Heading = styled.h1<{ open: boolean }>`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${(props) => (props.open ? "2.5rem" : "3rem")};
  font-weight: 300;
  margin: 0px;
  //margin-bottom: -0.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
    font-size: ${(props) => (props.open ? "3rem" : "5rem")};
  }
`;

const Subheading = styled.h2<{ open: boolean }>`
  font-size: ${(props) => (props.open ? "1rem" : "1.3em")};
  font-weight: 300;
  margin: 0;

  @media only screen and (min-width: 768px) {
    font-size: ${(props) => (props.open ? "1.2rem" : "1.8rem")};
  }
`;

const Finger = styled.span<{ open: boolean }>`
  font-size: 1.6rem;
  color: ${({ theme }) => (theme.darkMode ? "#0a415b" : "#dedede")};
  padding-top: 1.5rem;
  padding-left: 48%;
  text-align: left;
  display: ${(props) => (props.open ? "none" : "block")};

  animation-duration: 5s;
  animation-name: bounce;
  animation-iteration-count: infinite;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    padding-left: 12rem;
  }

  @keyframes bounce {
    20% {
      margin-top: 0px;
    }
    25% {
      margin-top: -0.3rem;
    }
    30% {
      margin-top: 0px;
    }
    35% {
      margin-top: -0.3rem;
    }
    40% {
      margin-top: 0px;
    }
  }
`;

const Header: React.FC<{
  open: boolean;
  darkMode: boolean;
  toggleDarkMode: () => void;
  handleHeaderClick: (newPage: PageType) => void;
}> = ({ open, darkMode, toggleDarkMode, handleHeaderClick }) => {
  return (
    <StyledHeader open={open}>
      <HeadingWrapper onClick={() => handleHeaderClick("about")}>
        <Heading open={true}>Max Pekarsky</Heading>
        <Subheading open={true}>full-stack product engineer</Subheading>
        <Finger open={true} />
      </HeadingWrapper>
      <DarkModeToggle
        open={open}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </StyledHeader>
  );
};

export default Header;
