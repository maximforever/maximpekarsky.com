import { MediumContainer } from "./Containers";
import Project from "./Project";
import { ProjectType } from "../types";
import styled from "styled-components/macro";
import writing from "../writing.json";

const WritingPage = () => {
  const writingHTML = writing.map((project: ProjectType) => (
    <Project key={project.title} project={project} />
  ));

  return <MediumContainer>{writingHTML}</MediumContainer>;
};

export default WritingPage;
