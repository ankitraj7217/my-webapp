import styled from "styled-components";

export const GenericH1 = styled.h1`
  font-size: ${(props) => props.theme.isMobile ? 2 : 4}rem;
  display: flex;
  justify-content: center;
  position: relative;
`;
