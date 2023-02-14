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

export const Nav = () => {
  return (
    <nav>
      <DesktopNav>
        <NavItem active>About</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Writing</NavItem>
        <NavItem>Work</NavItem>
      </DesktopNav>

      <MobileNav>
        <MobileNavItem active>
          <span className="lnr lnr-user"></span>
          <label>About</label>
        </MobileNavItem>
        <MobileNavItem>
          <span className="lnr lnr-laptop"></span>
          <label>Projects</label>
        </MobileNavItem>
        <MobileNavItem>
          <span className="lnr lnr-pencil"></span>
          <label>Writing</label>
        </MobileNavItem>
        <MobileNavItem>
          <span className="lnr lnr-mustache"></span>
          <label>Work</label>
        </MobileNavItem>
      </MobileNav>
    </nav>
  );
};
