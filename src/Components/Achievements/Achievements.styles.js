import styled from "styled-components";
import { borderAnimation } from "../../StyledComponentsUtils/Animation.styles";

export const AchievementsSectionComp = styled.section`
  margin: 2rem auto;
`;

export const AchievementsHeader = styled.h1`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  position: relative;
`;


export const AchievementsDetails = styled.div`
  margin: 4rem auto;
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ul {
    border-radius: 0.5rem;
    padding: 2rem 4rem;
    font-size: 2rem;
    animation: ${borderAnimation("#0ef", "2px", "0.5rem")} 4s ease-in-out forwards;

    li {
        margin-bottom: 1rem;
    }
  }
`;
