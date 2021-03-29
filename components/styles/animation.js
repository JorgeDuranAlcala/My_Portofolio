import { css, keyframes } from "styled-components";

const FadeIn = keyframes`
  from {
    filter: blur(8px);
    opacity: 0;
  }
  to {
    filter: blur(0px);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${FadeIn} ${time} ${type};
  `;
