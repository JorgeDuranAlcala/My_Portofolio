import React from "react";
import Head from "next/head";
import {
  NavLink,
  Container,
  MUIMenuIcon,
  AnchorsContainer,
  FullScreen,
  CloseBtn,
  CloseBtnContainer,
} from "./styles";
import { getLinks, links } from "./links";
import { useMediaQuery } from "@material-ui/core";
import Block from "../basics/Block";
import { useTheme } from "styled-components";
import { useScreenPosition } from "../../hooks/useScreenPosition";
import Anchor from "../basics/Anchor";

function Header() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.max.md);
  const [activeFullScreen, setActiveFullScreen] = React.useState(false);
  const [links, setLinks] = React.useState(getLinks());
  const linksRefs = React.useRef([]);
  const renderRefs = (node) =>
    (linksRefs.current = [node, ...linksRefs.current]);
  const { linkActived, changeBg } = useScreenPosition({
    linksRefs: linksRefs.current,
  });

  const renderAnchors = (mode) => {
    return links.map((link, index) => (
      <NavLink
        key={link.id}
        href={link.href}
        id={link.id}
        size={20}
        mode={!mode ? "normal" : mode}
        fontWeight="bold"
        selected={linkActived == link.id}
        ref={renderRefs}
        changeTextColor={changeBg}
      >
        {link.name}
      </NavLink>
    ));
  };

  const renderMenu = (fullscreen) =>
    fullscreen ? (
      <FullScreen
        direction="column"
        active={activeFullScreen}
        changeBg={changeBg}
      >
        <Block
          style={{ paddingRight: 20, paddingTop: 20 }}
          flex={0.2}
          align="center"
          justify="flex-end"
        >
          <CloseBtnContainer
            align="center"
            justify="center"
            onClick={() => setActiveFullScreen((prevState) => !prevState)}
          >
            <CloseBtn />
          </CloseBtnContainer>
        </Block>
        <Block direction="column" flex={0.8} align="center" justify="center">
          {renderAnchors("full-screen")}
        </Block>
      </FullScreen>
    ) : (
      <AnchorsContainer align="center">{renderAnchors()}</AnchorsContainer>
    );

  return (
    <Container changeBg={changeBg} align="center" justify="flex-end">
      <MUIMenuIcon
        onClick={() => setActiveFullScreen((prevState) => !prevState)}
      />
      {renderMenu(match)}
    </Container>
  );
}

export default Header;
