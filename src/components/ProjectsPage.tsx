import { MediumContainer } from "./Containers";
import Project from "./Project";
import { ProjectType } from "../types";
import projects from "../projects.json";
import styled from "styled-components/macro";

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProjectsPage = () => {
  const projectHTML = projects.map((project: ProjectType) => (
    <Project key={project.title} project={project} />
  ));

  return (
    <MediumContainer>
      <h2>My Projects</h2>
      <ProjectList>{projectHTML}</ProjectList>
    </MediumContainer>
  );
};

export default ProjectsPage;
