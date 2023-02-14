import { ProjectType } from "../types";
import styled from "styled-components/macro";

const StyledProject = styled.div`
  padding-bottom: 3rem;
`;

const Title = styled.h2`
  margin: 0;
`;

const Subtitle = styled.h3`
  margin: 0;
`;

const Description = styled.p``;

const Project: React.FunctionComponent<{ project: ProjectType }> = ({
  project,
}) => {
  return (
    <StyledProject>
      <Title>{project.title}</Title>
      {project.subtitle && <Subtitle>{project.subtitle}</Subtitle>}
      <Description>{project.description}</Description>
    </StyledProject>
  );
};

export default Project;
