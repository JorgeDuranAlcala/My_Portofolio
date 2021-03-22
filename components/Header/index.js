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

function Header() {
  const match = useMediaQuery("(max-width: 500px)");
  const [activeFullScreen, setActiveFullScreen] = React.useState(false);
  const [links, setLinks] = React.useState(getLinks());

  const selectLink = linkId => {
      setLinks(prevLinksArr => (
          prevLinksArr.map(link => (
              link.id == linkId
              ? {...link, selected: true}
              : {...link, selected: false}
          ) )
      ))
  }

  const renderAnchors = (mode) => {
    return links.map((link, index) => (
      <NavLink
        key={link.id}
        href={link.href}
        size={20}
        mode={!mode ? "normal" : mode}
        fontWeight="bold"
        selected={link.selected}
        onClick={() => selectLink(link.id)}
      >
        {link.name}
      </NavLink>
    ));
  };

  return (
    <Container align="center" justify="flex-end">
      <Head>
        <title>Jorge Duran</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MUIMenuIcon onClick={() => setActiveFullScreen((prevState) => !prevState)} />
      {match ? (
        <FullScreen direction="column" active={activeFullScreen}>
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
      )}
    </Container>
  );
}

export default Header;
