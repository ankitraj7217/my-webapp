import styled from "styled-components";
import { GenericH1 } from "../../StyledComponentsUtils/Generic.styles";

export const CertificationsSectionComp = styled.section`
  margin: 2rem auto;
`;

export const CertificationsHeader = styled(GenericH1)``;

export const CertificationsDetails = styled.div`
  margin: 1rem auto;
  width: 95vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1.5rem;
  row-gap: 2rem;

  @media (max-width: 767px) {
    width: 90vw;
  }
`;

export const CertificationBox = styled.div`
  width: 25rem;
  height: 10rem;
  padding: 1rem;
  background: linear-gradient(to bottom, #3ee8d8, #576ae1);
  border-radius: 0.5rem;

  * {
    background-color: inherit;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;
