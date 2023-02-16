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
  color: ${(props) => (props.darkMode ? "yellow" : "blue")};

  transition-property: color, opacity, visibility;
  transition-duration: ${({ theme }) => theme.transitions.long};
  svg {
    font-size: 2rem;
    margin-top: 1rem;
  }

  &:hover {
    cursor: pointer;
    color: red;
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
    <StyledDarkModeToggle id="dark-mode-toggle" darkMode={darkMode} open={open}>
      <FontAwesomeIcon icon={renderIcon()} onClick={toggleDarkMode} />
    </StyledDarkModeToggle>
  );
};

export default DarkModeToggle;
