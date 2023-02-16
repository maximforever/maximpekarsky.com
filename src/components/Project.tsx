import { ProjectType } from "../types";
import gemfm from "../assets/project_images/gemfm.gif";
import hackterms from "../assets/project_images/hackterms.gif";
import maximpekarsky from "../assets/project_images/maximpekarsky.gif";
import styled from "styled-components/macro";
import tinylogger from "../assets/project_images/tinylogger.gif";
import trakr from "../assets/project_images/trakr.gif";

const imagePaths: { [key: string]: string } = {
  hackterms: hackterms,
  gemfm: gemfm,
  tinylogger: tinylogger,
  trakr: trakr,
  maximpekarsky: maximpekarsky,
};

const StyledProject = styled.div`
  padding-bottom: 4rem;

  @media only screen and (min-width: 768px) {
  }
`;

const Image = styled.img<{ imagePath: string }>`
  margin-bottom: 1rem;
  display: block;
  border-radius: 0.5rem;
  height: auto;

  height: calc(90vw * 1 / 2);
  width: 90vw;
  box-sizing: border-box;

  // this is not a pretty way to get the image path, but it does work dynamically...
  background-color: black;
  background: ${(props) => `url("${props.imagePath}") no-repeat center center`};
  background-size: contain;

  @media only screen and (min-width: 768px) {
    height: 250px;
    max-width: 400px;
    box-sizing: content-box;
    background-size: cover;
    margin-bottom: 0px;
    margin-right: 1rem;
    filter: grayscale(2);
  }
`;

const ImageOverlay = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    z-index: 2;
    position: absolute;
    border-radius: 0.5rem;
    top: 0;
    width: 90vw;

    height: 250px;
    width: 400px;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  @media only screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
      ${Image} {
        filter: none;
      }

      ${ImageOverlay} {
        background: rgba(0, 0, 0, 0);
      }
    }
  }
`;

const Info = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

const Subtitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const Description = styled.p``;

const Project: React.FunctionComponent<{ project: ProjectType }> = ({
  project,
}) => {
  return (
    <StyledProject>
      <Wrapper>
        {project.imageTitle && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ImageWrapper>
              <Image imagePath={imagePaths[project.imageTitle]} />
              <ImageOverlay />
            </ImageWrapper>
          </a>
        )}
        <Info>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Title>{project.title}</Title>
          </a>
          {project.subtitle && <Subtitle>{project.subtitle}</Subtitle>}
          <Description>{project.description}</Description>
        </Info>
      </Wrapper>
    </StyledProject>
  );
};

export default Project;
