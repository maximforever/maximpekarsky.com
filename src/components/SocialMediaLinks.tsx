import { faFilePdf, faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../assets/Max_Pekarsky_Resume.pdf";
import styled from "styled-components/macro";

const Icon = styled.a``;

const SocialMediaIcons = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;

  overflow-y: hidden;
  max-height: ${(props) => (props.open ? "40rem" : "3rem")};
  transition-property: max-height;
  transition-duration: ${({ theme }) => theme.transitions.long};

  @media only screen and (min-width: 768px) {
    width: 25%;
    padding-top: 0;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 5%;
    box-sizing: border-box;
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
        font-size: 3.3vw;
      }

      @media only screen and (min-width: 1200px) {
        font-size: 3rem;
      }
    }

    span {
      font-size: 0.8rem;
      padding-top: 0.2rem;
      font-weight: 500;

      @media only screen and (min-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`;

const SocialMediaLinks: React.FC<{ open: boolean }> = ({ open }) => (
  <SocialMediaIcons open={open}>
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
  </SocialMediaIcons>
);

export default SocialMediaLinks;
