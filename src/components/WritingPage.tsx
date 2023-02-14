import NarrowContainer from "./NarrowContainer";
import Project from "./Project";
import { ProjectType } from "../types";
import writing from "../writing.json";

const WritingPage = () => {
  const writingHTML = writing.map((project: ProjectType) => (
    <Project key={project.title} project={project} />
  ));

  return (
    <NarrowContainer>
      <h2>My Writing</h2>
      {writingHTML}
    </NarrowContainer>
  );
};

export default WritingPage;
