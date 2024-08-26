import { AboutMeText } from "./StaticTextBlocks";
import SocialMediaLinks from "./SocialMediaLinks";
import styled from "styled-components/macro";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledAboutMeText = styled.div`
  font-weight: 400;
  line-height: 1.9;

  @media only screen and (min-width: 768px) {
    padding-top: 0;

    p {
      margin-top: 0;
    }

    font-size: 1.3vw;
    width: 75%;
  }
`;

const AboutMeContainer = styled.div`
  @media only screen and (min-width: 1200px) {
    max-width: 800px;
  }

  @media only screen and (min-width: 1600px) {
    max-width: 1800px;
  }
`;

const About: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <AboutWrapper>
      <StyledAboutMeText>
        <AboutMeContainer>
          <AboutMeText />
        </AboutMeContainer>
      </StyledAboutMeText>
      <SocialMediaLinks open={open} />
    </AboutWrapper>
  );
};

export default About;
