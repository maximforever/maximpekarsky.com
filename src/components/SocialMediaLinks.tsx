import { faFilePdf, faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../assets/Max_Pekarsky_Resume.pdf";
import styled from "styled-components/macro";

const Icon = styled.a``;

const SocialMediaIcons = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  //flex-grow: 1;
  padding-right: 5%;

  overflow-y: hidden;
  //max-height: ${(props) => (props.open ? "40rem" : "3rem")};
  transition-property: max-height;
  transition-duration: ${({ theme }) => theme.transitions.long};
  padding: 2rem 0 0 0;

  @media only screen and (min-width: 768px) {
    padding: 0 5% 0 0;
    width: 100%;
  }

  ${Icon} {
    display: flex;
    min-width: 4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 0.5rem;
    user-select: none;

    @media only screen and (min-width: 768px) {
      justify-content: flex-start;
      min-width: 5rem;
      margin-top: 0;
    }

    @media only screen and (min-width: 1200px) {
      justify-content: center;
    }

    svg {
      font-size: 1.5rem;

      @media only screen and (min-width: 768px) {
        //font size scales with width between 768px and 1200px, then snaps to 1.6rem
        font-size: 3vw;
      }

      @media only screen and (min-width: 1200px) {
        //font size scales with width between 768px and 1200px, then snaps to 1.6rem
        font-size: 2.5vw;
      }
    }

    span {
      font-size: 1.1rem;
      padding-top: 0.2rem;
      font-weight: 500;

      @media only screen and (min-width: 768px) {
        font-size: 1.1vw;
      }
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: initial;
    flex-direction: column;
    align-items: center;
  }
`;

const SocialMediaLinks: React.FC<{ open: boolean }> = ({ open }) => (
  <SocialMediaIcons open={open}>
    <IconWrapper>
      <Icon
        href="https://www.linkedin.com/in/maximpekarsky/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
        <span>LinkedIn</span>
      </Icon>
      <Icon
        href="https://github.com/maximforever"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>Github</span>
      </Icon>
      <Icon
        href="https://www.tinylogger.com/max"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faKeyboard} />
        <span>Blog</span>
      </Icon>
      <Icon href={Resume} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFilePdf} />
        <span>Resume</span>
      </Icon>
    </IconWrapper>
  </SocialMediaIcons>
);

export default SocialMediaLinks;
