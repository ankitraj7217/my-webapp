import styled from "styled-components";
import { borderAnimation } from "../../StyledComponentsUtils/Animation.styles";
import { GenericH1 } from "../../StyledComponentsUtils/Generic.styles";

export const AchievementsSectionComp = styled.section`
  margin: 2rem auto;
`;

export const AchievementsHeader = styled(GenericH1)``;

export const AchievementsDetails = styled.div`
  margin: 4rem auto;
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    width: 90vw;
  }

  ul {
    border-radius: 0.5rem;
    padding: 2rem 4rem;
    font-size: 2rem;
    animation: ${borderAnimation("#0ef", "2px", "0.5rem")} 4s ease-in-out
      forwards;

    @media (max-width: 767px) {
      padding: 2rem;
      font-size: 1rem;
    }

    li {
      margin-bottom: 1rem;
    }
  }
`;
