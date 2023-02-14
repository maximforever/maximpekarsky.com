import { PageType } from "../../types";
import styled from "styled-components/macro";

const DesktopNav = styled.div`
  display: none;
  padding: 1rem 0;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const MobileNav = styled.div`
  display: flex;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;

  &:first-child {
    border: none; !important;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div<{ active?: boolean }>`
  margin-right: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: ${(props) =>
    props.active ? "3px solid" + props.theme.colors.salmon : "none"};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.salmon};
  }
`;

const MobileNavItem = styled(NavItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: none;
  padding: 0.5rem;
  line-height: 2.3;
  border-radius: 0.3rem;

  background: ${(props) => (props.active ? "#ffbcb4" : "inherit")};

  border-left: 2px solid ${({ theme }) => theme.colors.black};

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
    <nav>
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
          <span className="lnr lnr-user"></span>
          <label>About</label>
        </MobileNavItem>
        <MobileNavItem
          active={page === "projects"}
          onClick={() => handleNavClick("projects")}
        >
          <span className="lnr lnr-laptop"></span>
          <label>Projects</label>
        </MobileNavItem>
        <MobileNavItem
          active={page === "writing"}
          onClick={() => handleNavClick("writing")}
        >
          <span className="lnr lnr-pencil"></span>
          <label>Writing</label>
        </MobileNavItem>
        <MobileNavItem
          active={page === "work"}
          onClick={() => handleNavClick("work")}
        >
          <span className="lnr lnr-mustache"></span>
          <label>Work</label>
        </MobileNavItem>
      </MobileNav>
    </nav>
  );
};
