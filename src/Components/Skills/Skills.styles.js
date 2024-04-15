import styled, { keyframes } from "styled-components";
import { GenericH1 } from "../../StyledComponentsUtils/Generic.styles";

const SkillsSectionComp = styled.section`
  margin: 5rem 0rem;
`;

const SkillsHeader = styled(GenericH1)`
  font-size: 4rem;
  display: flex;
  justify-content: center;
`;

const SkillsScrollSection = styled.section`
  margin: 4rem auto;
  max-width: 90vw;
  height: fit-content;
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
`;

const scrollAnimation = keyframes`
  to {
    transform: translate(-50%);
  }
`;

const SkillsScrollEle = styled.div`
  width: fit-content;
  display: flex;
  animation: ${scrollAnimation} 50s linear infinite;
  font-size: 2rem;
`;

const SkilledEleTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 1rem;
`;

export {
  SkillsSectionComp,
  SkillsHeader,
  SkillsScrollSection,
  SkillsScrollEle,
  SkilledEleTag,
};
