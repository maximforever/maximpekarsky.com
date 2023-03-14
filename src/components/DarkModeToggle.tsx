import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as lightbulbOn } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as lightbulbOff } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components/macro";
import { useEffect } from "react";
interface StyledToggleProps {
  darkMode: boolean;
  open: boolean;
}

const StyledDarkModeToggle = styled.div<StyledToggleProps>`
  opacity: ${(props) => (props.open ? "1" : "0")};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  max-width: ${(props) => (props.open ? "3rem" : "0rem")};
  color: ${(props) => (props.darkMode ? "#f6d36e" : "#055ca8")};

  transition-property: opacity, visibility, max-width;
  transition-duration: ${({ theme }) => theme.transitions.short};

  @media only screen and (min-width: 768px) {
    padding-right: 7%;
  }

  svg {
    font-size: 2rem;
    margin-top: 1rem;

    @media only screen and (min-width: 768px) {
      font-size: 3rem;
    }
  }

  &:hover {
    padding-bottom: 0.3rem;
    margin-top: -0.3rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.salmon};
  }
`;

const DarkModeToggle: React.FC<{
  open: boolean;
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ open, darkMode, toggleDarkMode }) => {
  const renderIcon = () => {
    return darkMode ? lightbulbOn : lightbulbOff;
  };

  return (
    <StyledDarkModeToggle
      id="dark-mode-toggle"
      onClick={toggleDarkMode}
      darkMode={darkMode}
      open={open}
    >
      <FontAwesomeIcon icon={renderIcon()} />
    </StyledDarkModeToggle>
  );
};

export default DarkModeToggle;
