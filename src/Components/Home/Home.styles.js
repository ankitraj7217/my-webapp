import styled from "styled-components";
import {
  slideLeft,
  slideTop,
  zoomIn,
} from "../../StyledComponentsUtils/Animation.styles";

const HomeSectionComp = styled.section`
  height: calc(100vh - ${(props) => props.theme.navbarHt});
  display: flex;
  position: relative;
`;

const HomeLeftTag = styled.div`
  width: 60%;
  margin: auto 2rem;
`;

const HomeH3Tag = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  opacity: 0;
  animation: ${slideTop("-50%")} 1s ease-in-out forwards;
  animation-delay: 0.7s;

  &:nth-of-type(2) {
    position: relative;
    opacity: 0;
    animation: ${slideTop("50%")} 1s ease-in-out forwards;
    animation-delay: 0.7s;

    span {
      display: inline-block;
      opacity: 0;
      color: #0ef;
      animation: ${slideLeft("50%")} 1s ease-in-out forwards;
      animation-delay: 0.7s;
    }
  }
`;

const HomeH1Tag = styled.h1`
  font-size: 4rem;
  opacity: 0;
  animation: ${slideLeft("25%")} 1s ease-in-out forwards;
  animation-delay: 0.7s;
`;

const HomePTag = styled.p`
  font-size: 1rem;
  margin: 1rem 0rem;
  opacity: 0;
  animation: ${slideTop("50%")} 1s ease-in-out forwards;
  animation-delay: 0.7s;
`;

const HomeDivSMTag = styled.div`
  height: 4rem;
`;

const HomeSMIcTag = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: 2px solid #0ef;
  border-radius: 50%;
  font-size: 1%.5;
  color: #0ef;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
  margin: 16px 8px;
  transition: 0.5s ease;
  cursor: pointer;
  opacity: 0;
  animation: ${slideLeft("400%")} 2s ease-in-out forwards;
  animation-delay: ${(props) => props.$index * 0.2 + 0.7}s;

  i {
    color: #0ef;
  }

  &:hover {
    background: #0ef;
    color: ${({ theme }) =>
      theme.isDark
        ? theme.colors.dark.bgColorPrimary
        : theme.colors.light.bgColorPrimary};
    i {
      padding: 0.25rem;
      border-radius: 50%;
    }
    box-shadow: 0 0 20px #0ef;
  }
`;

const HomeRightTag = styled.div`
  width: 40%;
  margin: auto;

  img {
    width: 70%;
    height: 50%;
    opacity: 0;
    animation: ${zoomIn} 2s ease-in-out forwards;
    animation-delay: 0.7s;
  }
`;

export {
  HomeSectionComp,
  HomeLeftTag,
  HomeH3Tag,
  HomeH1Tag,
  HomePTag,
  HomeDivSMTag,
  HomeSMIcTag,
  HomeRightTag,
};
