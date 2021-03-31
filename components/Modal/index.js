import React from "react";
import styled from "styled-components";

export default function Modal({ children, open, onClose }) {
  const bgRef = React.useRef(null);

  const onClick = React.useCallback(
    (e) => {
      if (e.target !== bgRef.current) return;
      onClose();
    },
    [bgRef.current]
  );

  return open ? (
    <Background ref={bgRef} onClick={onClick}>
      {children}
    </Background>
  ) : null;
}

const Background = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
`;
