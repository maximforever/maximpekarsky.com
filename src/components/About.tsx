import { AboutMeText } from "./StaticTextBlocks";
import styled from "styled-components/macro";
import SocialMediaLinks from "./SocialMediaLinks";

const StyledAbout = styled.div`
  max-width: 600px;
  line-height: 1.7;
  padding-bottom: 10rem;

  @media only screen and (min-width: 768px) {
    padding-bottom: initial;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <AboutMeText />
      <SocialMediaLinks />
    </StyledAbout>
  );
};

export default About;
