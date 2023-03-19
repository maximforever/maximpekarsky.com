import {
  faBuilding,
  faCircleUser,
  faFilePdf,
} from "@fortawesome/free-regular-svg-icons";
import { faFeatherPointed, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageType } from "../types";
import Resume from "../assets/Max_Pekarsky_Resume.pdf";
import styled from "styled-components/macro";

const DesktopNav = styled.nav`
  display: none;
  padding: 3rem 0 5vw 0;
  width: 80%;
  max-width: 1000px;

  .fa-file-pdf {
    padding-right: 0.5rem;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const MobileNav = styled.nav<{ open: boolean }>`
  display: flex;
  padding: 0;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.03);
  z-index: 99;

  position: fixed;
  //bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  justify-content: space-evenly;
  backdrop-filter: blur(7.4px);

  opacity: ${(props) => (props.open ? "1" : "0")};
  bottom: ${(props) => (props.open ? "0" : "-30vh")};

  transition: opacity, ${({ theme }) => theme.transitions.medium};
  transition: bottom, ${({ theme }) => theme.transitions.long};

  > * {
    &:last-child {
      border-right: none;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

// unlike most of the styles on the site, which are mobile-first
// nav items and the navbar are defined desktop-first, then styled separately
// as `MobileNavItem`
const NavItem = styled.div<{ active?: boolean }>`
  font-weight: 600;
  padding-bottom: 0.5rem;
  /* TODO: there's a transition bug with this color */
  color: ${(props) =>
    props.active ? props.theme.colors.salmon : props.theme.colors.lightGray};
  border-bottom: ${(props) =>
    props.active ? `3px solid ${props.theme.colors.salmon}` : "none"};
  user-select: none;

  @media only screen and (min-width: 768px) {
    //font size scales with width between 768px and 1200px, then snaps to 1.6rem
    font-size: 1.9vw;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.4rem;
  }

  a {
    display: flex;
    flex-wrap: nowrap;
    color: inherit !important;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.salmon};
  }
`;

const MobileNavItem = styled(NavItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2;
  margin: 0;
  font-weight: 400;
  border-right: 1px solid gray;
  width: 100%;
  padding: 0.3rem;
  font-size: 0.9rem;

  color: ${(props) =>
    props.active ? props.theme.colors.salmon : props.theme.colors.black};

  svg {
    font-size: 1.1rem;
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
  open: boolean;
  page: PageType;
  handleNavClick: (page: PageType) => void;
}

const Nav: React.FunctionComponent<NavProps> = ({
  open,
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
        <NavItem>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFilePdf} />
            Resume
          </a>
        </NavItem>
      </DesktopNav>

      <MobileNav open={open}>
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

export default Nav;
