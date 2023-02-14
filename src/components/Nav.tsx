import { faBuilding, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faFeatherPointed, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageType } from "../../types";
import styled from "styled-components/macro";

const DesktopNav = styled.nav`
  display: none;
  padding: 1rem 0;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  padding: 0;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.03);

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  justify-content: space-evenly;
  backdrop-filter: blur(7.4px);

  > * {
    &:last-child {
      border: none;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div<{ active?: boolean }>`
  font-weight: 600;
  margin-right: 4rem;
  padding-bottom: 0.5rem;
  color: ${(props) => (props.active ? props.theme.colors.salmon : "inherit")};
  border-bottom: ${(props) =>
    props.active ? `3px solid ${props.theme.colors.salmon}` : "none"};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.salmon};
  }
`;

const MobileNavItem = styled(NavItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2.3;
  margin: 0;
  border-right: 1px solid gray;
  width: 100%;
  padding: 0.5rem 0;

  svg {
    font-size: 1.5rem;
    padding-top: 0.5rem;
  }

  &:hover {
    cursor: pointer;
  }

  span:hover,
  label:hover {
    cursor: pointer;
  }
`;

interface NavProps {
  page: PageType;
  handleNavClick: (page: PageType) => void;
}

export const Nav: React.FunctionComponent<NavProps> = ({
  page,
  handleNavClick,
}) => {
  return (
    <>
      <DesktopNav>
        <NavItem
          active={page === "about"}
          onClick={() => handleNavClick("about")}
        >
          About
        </NavItem>
        <NavItem
          active={page === "projects"}
          onClick={() => handleNavClick("projects")}
        >
          Projects
        </NavItem>
        <NavItem
          active={page === "writing"}
          onClick={() => handleNavClick("writing")}
        >
          Writing
        </NavItem>
        <NavItem
          active={page === "work"}
          onClick={() => handleNavClick("work")}
        >
          Work
        </NavItem>
      </DesktopNav>

      <MobileNav>
        <MobileNavItem
          active={page === "about"}
          onClick={() => handleNavClick("about")}
        >
          <FontAwesomeIcon icon={faCircleUser} />
          <label>About</label>
        </MobileNavItem>
        <MobileNavItem
          active={page === "projects"}
          onClick={() => handleNavClick("projects")}
        >
          <FontAwesomeIcon icon={faLaptop} />
          <label>Projects</label>
        </MobileNavItem>
        <MobileNavItem
          active={page === "writing"}
          onClick={() => handleNavClick("writing")}
        >
          <FontAwesomeIcon icon={faFeatherPointed} />
          <label>Writing</label>
        </MobileNavItem>
        <MobileNavItem
          active={page === "work"}
          onClick={() => handleNavClick("work")}
        >
          <FontAwesomeIcon icon={faBuilding} />
          <label>Work</label>
        </MobileNavItem>
      </MobileNav>
    </>
  );
};
