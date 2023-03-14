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

    //font size scales with width between 768px and 1200px, then snaps to 1.6rem
    font-size: 1.8vw;
    width: 75%;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;

const AboutMeContainer = styled.div`
  //max-width: 1200px;
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
