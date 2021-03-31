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

const GradualyIncresing = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(50)
  }
`;

const createAnimation = ({ animationName, time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${animationName} ${time} ${type};
  `;

export const gradualIncresing = (opts = {}) =>
  createAnimation({ animationName: GradualyIncresing, ...opts });

export const fadeIn = (opts = {}) =>
  createAnimation({ animationName: FadeIn, ...opts });
