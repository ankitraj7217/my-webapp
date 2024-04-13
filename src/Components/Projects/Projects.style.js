import styled from "styled-components";

export const ProjectsSectionComp = styled.section`
  margin: 5rem auto;
`;

export const ProjectsHeaderEle = styled.h1`
  font-size: 4rem;
  display: flex;
  justify-content: center;
`;

export const ProjectsDetailsEle = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  flex-wrap: wrap;
  margin: 2rem auto;
`;

// Project Individual Component
export const ProjectIndComp = styled.div`
  flex: 1 1 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  min-width: 240px;
  max-width: 480px;
  background: linear-gradient(to bottom, #3c1642, #8f2d56);
  color: #ffffff;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;

  > * {
    background-color: inherit;
    color: inherit;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 2rem;
  }

  .details {
    display: flex;
    align-items: flex-start;
    text-align: center;
  }

  .link {
    display: flex;

    * {
      background-color: inherit;
      color: inherit;
    }

    a {
      margin-left: 0.5rem;
    }
  }
`;
