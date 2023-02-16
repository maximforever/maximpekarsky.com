import { AboutMeText } from "./StaticTextBlocks";
import { NarrowContainer } from "./Containers";
import SocialMediaLinks from "./SocialMediaLinks";
import styled from "styled-components/macro";

const StyledAbout = styled(NarrowContainer)`
  line-height: 1.7;
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
