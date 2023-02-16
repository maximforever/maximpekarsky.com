import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as lightbulbOn } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as lightbulbOff } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components/macro";

const StyledDarkModeToggle = styled.div<{ darkMode: boolean }>`
  color: ${(props) => (props.darkMode ? "yellow" : "blue")};
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
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ darkMode, toggleDarkMode }) => {
  const renderIcon = () => {
    return darkMode ? lightbulbOn : lightbulbOff;
  };

  return (
    <StyledDarkModeToggle darkMode={darkMode}>
      <FontAwesomeIcon icon={renderIcon()} onClick={toggleDarkMode} />
    </StyledDarkModeToggle>
  );
};

export default DarkModeToggle;
