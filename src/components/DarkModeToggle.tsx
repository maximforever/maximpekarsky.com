import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as lightbulbOn } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as lightbulbOff } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components/macro";

const StyledDarkModeToggle = styled.div`
  svg {
    font-size: 2rem;
  }
`;

const TurnLightOff = styled(StyledDarkModeToggle)`
  color: blue;
`;

const TurnLightOn = styled(StyledDarkModeToggle)`
  color: yellow;
`;

const DarkModeToggle: React.FC<{
  darkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
}> = ({ darkMode, toggleDarkMode }) => {
  if (darkMode) {
    return (
      <TurnLightOn>
        <FontAwesomeIcon
          icon={lightbulbOn}
          onClick={() => toggleDarkMode(false)}
        />
      </TurnLightOn>
    );
  } else {
    return (
      <TurnLightOff>
        <FontAwesomeIcon
          icon={lightbulbOff}
          onClick={() => toggleDarkMode(true)}
        />
      </TurnLightOff>
    );
  }
};

export default DarkModeToggle;
