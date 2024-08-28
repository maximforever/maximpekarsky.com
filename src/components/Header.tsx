import DarkModeToggle from "./DarkModeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageType } from "../types";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components/macro";

const StyledHeader = styled.header`
  display: flex;
  user-select: none;
  justify-content: space-between;
`;

const HeadingWrapper = styled.div<{ open: boolean }>`
  text-align: center;
  margin-top: ${(props) => (props.open ? "0" : "38vh")};
  transition: margin-top, transform, width;
  transition-duration: ${({ theme }) => theme.transitions.long};
  width: ${(props) => (props.open ? "0" : "100%")};
  padding-bottom: 2rem;

  @media only screen and (min-width: 768px) {
    padding-bottom: 0;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.salmon};
    }
  }
`;

const Heading = styled.h1<{ open: boolean }>`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${(props) => (props.open ? "2.3rem" : "5vh")};
  font-weight: 300;
  margin: 0px;
  white-space: nowrap;
  transition: font-size, ${({ theme }) => theme.transitions.long};

  @media only screen and (min-width: 400px) {
    font-size: ${(props) => (props.open ? "2.8rem" : "5vh")};
  }

  @media only screen and (min-width: 768px) {
    font-size: ${(props) => (props.open ? "4vw" : "7vh")};
  }

  @media only screen and (min-width: 1200px) {
    font-size: ${(props) => (props.open ? "3vw" : "7vh")};
  }
`;

const Subheading = styled.h2<{ open: boolean }>`
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  white-space: nowrap;
  transition: font-size, ${({ theme }) => theme.transitions.long};

  @media only screen and (min-width: 400px) {
    font-size: ${(props) => (props.open ? "1.2rem" : "2.5vh")};
  }

  @media only screen and (min-width: 768px) {
    font-size: ${(props) => (props.open ? "1.6vw" : "2.5vh")};
  }

  @media only screen and (min-width: 1200px) {
    font-size: ${(props) => (props.open ? "1.2vw" : "2.5vh")};
  }
`;

const StyledFinger = styled.div<{ open: boolean }>`
  font-size: 1.6rem;
  color: ${(props) =>
    props.theme.darkMode ? props.theme.colors.lightGray : "#6991b1"};
  padding-top: 1rem;
  text-align: center;
  visibility: ${(props) => (props.open ? "hidden" : "visible")};
  opacity: ${(props) => (props.open ? "0" : "0.6")};

  transition-property: visibility, opacity;
  transition-duration: ${({ theme }) => theme.transitions.long};

  svg {
    animation-duration: 5s;
    animation-name: bounce;
    animation-iteration-count: infinite;
    display: block;
    margin: 0 auto;
  }

  display: ${(props) => (props.open ? "none" : "block")};

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
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
    <StyledHeader>
      <HeadingWrapper open={open} onClick={() => handleHeaderClick("about")}>
        <Heading open={open}>Max Pekarsky</Heading>
        <Subheading open={open}>full-stack product engineer</Subheading>
        <StyledFinger open={open}>
          <FontAwesomeIcon icon={faHandPointUp} />
        </StyledFinger>
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
