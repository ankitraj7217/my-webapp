import styled from "styled-components";
import {
  slideDown,
  slideLeft,
  slideRight,
} from "../../StyledComponentsUtils/Animation.styles";
import { GenericH1 } from "../../StyledComponentsUtils/Generic.styles";

const NavbarComp = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 4;
  height: ${(props) => props.theme.navbarHt};
  display: flex;
  justify-content: ${(props) => props.theme.isMobile ? "space-between" : "center"};
  padding: 0 0.5rem;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
`;

const NavbarH1Tag = styled(GenericH1)`
  display: block;
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

const NavbarTheme = styled.div`
  position: absolute;
  right: 4rem;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.isMobile ? "1rem" : "2rem"};
  cursor: pointer;
  animation: ${slideLeft("50%")} 2s ease-in-out forwards;

  @media (max-width: 767px) {
    right: 2rem;
   }
`;

export {
  NavbarComp,
  NavbarH1Tag,
  NavbarRightDivTag,
  NavbarAnchorTag,
  NavbarTheme,
};
