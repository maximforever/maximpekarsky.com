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

const FilterSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseFilter = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.blue};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.salmon};
  }
`;

const FilterSection = styled.div`
  padding: 1rem 1rem 0 1rem;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.veryLightGray};

  @media only screen and (min-width: 768px) {
    padding: 2rem 2rem 0 2rem;
    font-size: 1.1rem;
  }
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
  let filteredProjects;

  // TODO: pull this filtering logic out of this file
  if (!filters.length) {
    filteredProjects = projects;
  } else {
    filteredProjects = projects.filter((project) => {
      let includeProject = true;

      for (const filter of filters) {
        if (!project.stack.includes(filter)) {
          includeProject = false;
        }
      }

      return includeProject;
    });
  }

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

  const resetFilters = () => {
    setFilters([]);
  };

  const renderFilters = () => {
    if (!filters.length) {
      return null;
    }

    const projectCount: number = filteredProjects.length;

    const filterLabel =
      projectCount === 1
        ? `Showing ${projectCount} project that uses`
        : `Showing ${projectCount} projects that use`;

    return (
      <FilterSection>
        <FilterSectionHeader>
          {filterLabel}
          <CloseFilter>
            <FontAwesomeIcon icon={faXmark} onClick={() => resetFilters()} />
          </CloseFilter>
        </FilterSectionHeader>
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
