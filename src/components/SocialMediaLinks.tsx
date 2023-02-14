import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faKeyboard } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components/macro";

const SocialMediaIcons = styled.div`
  display: flex;
  a {
    height: 4rem;
    min-width: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;

    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 0.5rem;

    @media only screen and (min-width: 768px) {
      height: 5rem;
      min-width: 5rem;
      margin-right: 2rem;
    }

    svg {
      font-size: 1.5rem;
      @media only screen and (min-width: 768px) {
        font-size: 2rem;
      }
    }

    span {
      font-size: 0.8rem;
      padding-top: 0.2rem;
      font-weight: 400;
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.red};
    }
  }
`;

const SocialMediaLinks = () => (
  <SocialMediaIcons>
    <a
      href="https://www.linkedin.com/in/maximpekarsky/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedinIn} />
      <span>LinkedIn</span>
    </a>
    <a
      href="https://github.com/maximforever"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} />
      <span>Github</span>
    </a>
    <a
      href="https://www.tinylogger.com/max"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faKeyboard} />
      <span>Blog</span>
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFilePdf} />
      <span>Resume</span>
    </a>
  </SocialMediaIcons>
);

export default SocialMediaLinks;
