import React from "react";
import styled from "styled-components";
import Block from "../basics/Block";

export const Background = styled.div`
  && {
    display: ${({ open }) => !open ? "none" : 'flex'};
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const BackgroundWrapper = React.forwardRef((props, ref) => {
  return <Background ref={ref} {...props} />;
});
