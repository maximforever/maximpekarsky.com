import { AboutMeText } from "./StaticTextBlocks";
import { NarrowContainer } from "./Containers";
import SocialMediaLinks from "./SocialMediaLinks";
import styled from "styled-components/macro";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledAboutMeText = styled(NarrowContainer)`
  display: block;
  line-height: 1.7;
  flex-grow: 1;
`;

const About: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <AboutWrapper>
      <StyledAboutMeText>
        <AboutMeText />
      </StyledAboutMeText>
      <SocialMediaLinks open={open} />
    </AboutWrapper>
  );
};

export default About;
