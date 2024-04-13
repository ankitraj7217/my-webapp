import { keyframes } from "styled-components";

const slideRight = (leftVal) => keyframes`
    0% {
        left: ${leftVal};
        opacity: 0;
    }

    100% {
        left: 0%;
        opacity: 1;
    }
`;

const slideDown = (topVal) =>  keyframes`
    0% {
        transform: translateY(${topVal});
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`

const slideTop = (downVal) => keyframes`
  0% {
    transform: translateY(${downVal});
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideLeft = (rightVal) => keyframes`
  0% {
    transform: translateX(${rightVal});
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const zoomIn = keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`;



export { slideRight, slideDown, slideTop, slideLeft, zoomIn };