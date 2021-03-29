import React from "react";
import styled from "styled-components";

const Anchor = ({ children, ...rest }) => {
  return <StyledAnchor {...rest}>{children}</StyledAnchor>;
};

export default Anchor;

const StyledAnchor = styled.a`
  color: ${({ theme, color }) => (!color ? theme.text.color.primary : color)};
  font-size: ${({ theme, size }) =>
    size ? theme.size("px", size) : "inherit"};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) =>
    lineHeight ? theme.size("px", lineHeight) : "inherit"};
`;
