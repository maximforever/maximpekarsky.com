import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project from "./Project";
import { ProjectType } from "../types";
import StyledTag from "./StyledTag";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import projects from "../projects.json";
import styled from "styled-components/macro";

import { useState } from "react";

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FilterSection = styled.div`
  padding: 1rem 1rem 0 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.veryLightGray};
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;

  svg {
    margin-left: 0.5rem;
  }
`;

const ProjectsPage = () => {
  const [filters, setFilters] = useState<string[]>([]);

  let filteredProjects = projects;

  const toggleFilter = (newFilter: string) => {
    if (filters.includes(newFilter)) {
      setFilters(filters.filter((filter) => filter !== newFilter));
    } else {
      setFilters(filters.concat(newFilter));
    }
  };

  const projectHTML = filteredProjects.map((project: ProjectType) => (
    <Project
      key={project.title}
      project={project}
      toggleFilter={toggleFilter}
    />
  ));

  const renderFilters = () => {
    if (!filters.length) {
      return null;
    }

    return (
      <FilterSection>
        Filtering projects that use
        <TagWrapper>
          {filters.map((tag) => (
            <StyledTag key={tag} onClick={() => toggleFilter(tag)}>
              {tag}
              <FontAwesomeIcon icon={faXmark} />
            </StyledTag>
          ))}
        </TagWrapper>
      </FilterSection>
    );
  };

  return (
    <div>
      {renderFilters()}
      <ProjectList>{projectHTML}</ProjectList>
    </div>
  );
};

export default ProjectsPage;
