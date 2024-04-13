import styled, { keyframes } from "styled-components";

export const ExperienceSectionComp = styled.section`
  margin: 2rem auto;
`;

const showRightKeyFrame = keyframes`
    100% {
        width: 0;
    }
`;

export const ESpanAnimate = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    width: 105%;
    height: 100%;
    animation: ${showRightKeyFrame} 5s ease forwards;
    animation-delay: ${(props) => 0.5 * props.$timing}s;
`;

export const ExperienceHeader = styled.h1`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ExperienceTimelineBox = styled.div`
  flex: 1 1 75vw;
  max-width: 75vw;
  min-width: 50vw;
  margin: 2rem auto;
  padding-left: 2rem; // check left of timeline content if this is changed
  border-left: 2px solid #0ef;
  position: relative;
`;

export const ExperienceTimelineContent = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0rem;
    left: -2.7rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: #0ef;
  }
`;

export const EContent = styled.div`
  padding: 1.5rem;
  border: 2px solid #0ef;
  border-radius: 0.5rem;
  margin-bottom: 2rem;

  * {
    margin-bottom: 0.5rem;
  }

  .year {
    color: #0ef;
    font-size: 1rem;

    i {
      color: #0ef;
      margin-right: 0.5rem;
    }
  }

  ul {
    font-size: 1rem;
    padding-left: 0.75rem;
  }
`;
