import { MediumContainer } from "./Containers";
import Project from "./Project";
import { ProjectType } from "../types";
import writing from "../writing.json";

const WritingPage = () => {
  const writingHTML = writing.map((project: ProjectType) => (
    <Project key={project.title} project={project} />
  ));

  return (
    <MediumContainer>
      <h2>My Writing</h2>
      {writingHTML}
    </MediumContainer>
  );
};

export default WritingPage;
