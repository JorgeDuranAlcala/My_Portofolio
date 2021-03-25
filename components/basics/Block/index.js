import React from "react";
import styled from "styled-components";

function Block(props) {
  return <Container {...props}>{props.children}</Container>;
}

export default Block;

const Container = styled.div`
  display: ${({ grid }) => (!grid ? "flex" : "grid")};
  place-items: ${({ placeItems }) => placeItems};
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  justify-self: ${({ justifySelf }) => justifySelf};
  align-self: ${({ alignSelf }) => alignSelf};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ wrap }) => wrap};
  grid-template-columns: ${({ autoFill, autoFit, min, max, col }) =>
    autoFill || autoFit
      ? `repeat(${
          !autoFill ? (autoFit ? "auto-fit" : "") : "auto-fill"
        }, minmax(${min}, ${max}))`
      : col};
  grid-auto-flow: ${({ autoFlow }) => autoFlow};
  grid-gap: ${({ gap, theme }) => theme.size("px", gap)};
`;
