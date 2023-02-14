import { AboutMeText } from "./StaticTextBlocks";
import NarrowContainer from "./NarrowContainer";
import SocialMediaLinks from "./SocialMediaLinks";
import styled from "styled-components/macro";

const StyledAbout = styled(NarrowContainer)`
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
