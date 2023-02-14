import NarrowContainer from "./NarrowContainer";
import Project from "./Project";
import { ProjectType } from "../types";
import projects from "../projects.json";

const ProjectsPage = () => {
  const projectHTML = projects.map((project: ProjectType) => (
    <Project key={project.title} project={project} />
  ));

  return (
    <NarrowContainer>
      <h2>My Projects</h2>
      {projectHTML}
    </NarrowContainer>
  );
};

export default ProjectsPage;
