import { AboutMeText } from "./StaticTextBlocks";
import styled from "styled-components/macro";

const StyledAbout = styled.div`
  max-width: 600px;
`;

const About = () => {
  return (
    <StyledAbout>
      <AboutMeText />
    </StyledAbout>
  );
};

export default About;
