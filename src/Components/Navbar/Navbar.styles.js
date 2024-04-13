import styled from "styled-components";
import {
  slideDown,
  slideRight,
} from "../../StyledComponentsUtils/Animation.styles";

const NavbarComp = styled.nav`
  height: ${props => props.theme.navbarHt};
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
`;

const NavbarH2Tag = styled.h2`
  position: relative;
  margin-left: 2rem;
  opacity: 0;
  animation: ${slideRight("-10%")} 2s ease-in-out forwards;
`;

const NavbarRightDivTag = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavbarAnchorTag = styled.a`
  display: inline-block;
  position: relative;
  margin: 0rem 0.5rem;
  opacity: 0;
  cursor: pointer;
  animation: ${slideDown("-100%")} 1s ease-in-out forwards; // 1s can be modified based on data length
  animation-delay: ${(props) => props.$index * 0.2}s;

  &:hover {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #0ef;
  }
`;

export { NavbarComp, NavbarH2Tag, NavbarRightDivTag, NavbarAnchorTag };