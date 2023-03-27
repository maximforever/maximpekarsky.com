import { ProjectType } from "../types";
import flipper from "../assets/project_images/projects/flipper.gif";
import flipperStatic from "../assets/project_images/projects/flipper.png";
import gemfm from "../assets/project_images/projects/gemfm.gif";
import gemfmStatic from "../assets/project_images/projects/gemfm.png";
import hackterms from "../assets/project_images/projects/hackterms.gif";
import hacktermsStatic from "../assets/project_images/projects/hackterms.png";
import maximpekarsky from "../assets/project_images/projects/maximpekarsky.gif";
import maximpekarskyStatic from "../assets/project_images/projects/maximpekarsky.png";
import songquiz from "../assets/project_images/projects/songquiz.gif";
import songquizStatic from "../assets/project_images/projects/songquiz.png";
import spaceSquares from "../assets/project_images/projects/spacesquares.gif";
import spaceSquaresStatic from "../assets/project_images/projects/spacesquares.png";
import styled from "styled-components/macro";
import textclock from "../assets/project_images/projects/textclock.gif";
import textclockStatic from "../assets/project_images/projects/textclock.png";
import tinylogger from "../assets/project_images/projects/tinylogger.gif";
import tinyloggerStatic from "../assets/project_images/projects/tinylogger.png";
import traffic from "../assets/project_images/projects/traffic.gif";
import trafficStatic from "../assets/project_images/projects/traffic.png";
import trakr from "../assets/project_images/projects/trakr.gif";
import trakrStatic from "../assets/project_images/projects/trakr.png";
import wordsync from "../assets/project_images/projects/wordsync.gif";
import wordsyncStatic from "../assets/project_images/projects/wordsync.png";
import wtfistoday from "../assets/project_images/projects/wtfistoday.gif";
import wtfistodayStatic from "../assets/project_images/projects/wtfistoday.png";

// this allows us to get the image path dynamically by passing in the `imageTitle` property stored in the json
const gifPaths: { [key: string]: string } = {
  hackterms: hackterms,
  gemfm: gemfm,
  tinylogger: tinylogger,
  trakr: trakr,
  maximpekarsky: maximpekarsky,
  traffic: traffic,
  spacesquares: spaceSquares,
  textclock: textclock,
  wtfistoday: wtfistoday,
  songquiz: songquiz,
  wordsync: wordsync,
  flipper: flipper,
};

const imagePaths: { [key: string]: string } = {
  hackterms: hacktermsStatic,
  gemfm: gemfmStatic,
  tinylogger: tinyloggerStatic,
  trakr: trakrStatic,
  maximpekarsky: maximpekarskyStatic,
  traffic: trafficStatic,
  spacesquares: spaceSquaresStatic,
  textclock: textclockStatic,
  wtfistoday: wtfistodayStatic,
  songquiz: songquizStatic,
  wordsync: wordsyncStatic,
  flipper: flipperStatic,
};

const StyledProject = styled.div`
  padding-bottom: 5rem;

  @media only screen and (min-width: 768px) {
    padding-bottom: 9rem;
    max-width: 1200px;
  }
`;

const StyledGif = styled.img<{ gifPath: string }>`
  display: block;
  border-radius: 0.5rem;
  height: auto;

  height: calc(90vw * 1 / 2);
  width: 90vw;
  box-sizing: border-box;

  background-color: black;
  background: ${(props) => `url("${props.gifPath}") no-repeat center center`};
  background-size: cover;

  @media only screen and (min-width: 768px) {
    height: 300px;
    max-width: 480px;
    box-sizing: content-box;
    margin-bottom: 0px;
  }
`;

const StaticImage = styled.img<{ imagePath: string }>`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    background: ${(props) =>
      `url("${props.imagePath}") no-repeat center center`};
    background-size: cover;
    height: 300px;
    max-width: 480px;
    z-index: 2;
    position: absolute;
    border-radius: 0.5rem;
    top: 0;
    width: 90vw;
    filter: grayscale(2);
  }
`;

const ImageOverlay = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    z-index: 3;
    position: absolute;
    border-radius: 0.5rem;
    top: 0;
    width: 90vw;

    height: 300px;
    width: 480px;
    background: ${({ theme }) => theme.colors.washedOutBlack};
    opacity: 0.2;
    transition-property: opacity;
    transition-duration: ${({ theme }) => theme.transitions.short};
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 3rem;

    &:hover {
      cursor: pointer;

      // on Desktop, the gif has two overlays: a static image, and a black opaque div.
      // This makes both invisible (the transition lives on ImageOverlay)
      ${StaticImage} {
        opacity: 0;
      }

      ${ImageOverlay} {
        opacity: 0;
      }
    }
  }
`;

const Info = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.a`
  margin: 0;
  font-weight: 500;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.black};

  &:visited,
  &:active {
    color: ${({ theme }) => theme.colors.black};
  }

  @media only screen and (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.h3`
  margin: 0;
  padding: 0.5rem 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const Description = styled.p`
  line-height: 1.9;
  margin: 0;
  padding: 0.5rem 0;

  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

const Tag = styled.div`
  font-family: "Source Code Pro", monospace;
  padding: 0.2rem 1.4rem;
  background: ${({ theme }) => theme.colors.veryLightGray};
  color: ${({ theme }) => theme.colors.blue};
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.8rem;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.salmon};
  }
`;

const Project: React.FunctionComponent<{ project: ProjectType }> = ({
  project,
}) => {
  const renderStackTags = () => {
    if (project.stack === undefined) {
      return null;
    }

    const tagHTML = project.stack.map((tag) => <Tag key={tag}>{tag}</Tag>);

    return <TagWrapper>{tagHTML}</TagWrapper>;
  };

  return (
    <StyledProject>
      <Wrapper>
        {project.imageTitle && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ImageWrapper>
              <StyledGif gifPath={gifPaths[project.imageTitle]} />
              <StaticImage imagePath={imagePaths[project.imageTitle]} />
              <ImageOverlay />
            </ImageWrapper>
          </a>
        )}
        <Info>
          <Title href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
          </Title>
          {project.subtitle && <Subtitle>{project.subtitle}</Subtitle>}
          <Description
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></Description>
          {project.stack && renderStackTags()}
        </Info>
      </Wrapper>
    </StyledProject>
  );
};

export default Project;
