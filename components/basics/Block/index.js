import React from "react";
import styled from "styled-components";

function Block(props) {
  return <Container {...props}>{props.children}</Container>;
}

export default Block;

const Container = styled.div`
  display: ${({ grid }) => (!grid ? "flex" : "grid")};
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ wrap }) => wrap};
  grid-template-columns: ${({ autoFill, min, max, col }) =>
    autoFill ? `repeat(auto-fill, minmax(${min}, ${max}))` : col};
  grid-auto-flow: ${({ autoFlow }) => autoFlow};
  grid-gap: ${({ gap, theme }) => theme.size("px", gap)};
`;
