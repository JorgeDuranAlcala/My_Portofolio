import React, { useState } from "react";
import {
  Container,
  Title,
  ProjectImg,
  Mask,
  ModalBody,
  ModalContent,
  ModalImg,
  CloseBtn,
  PreviewBtn,
} from "./styles";
import Modal from "../Modal";
import { Close as MdClose } from "@material-ui/icons";
import Block from "../basics/Block";
import Image from "next/image";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@material-ui/core";

const DEFAULT_IMAGE = "https://i.imgur.com/UKMHLmx.png";

function Project({
  title,
  img: { url: imgUrl = DEFAULT_IMAGE },
  link,
  desc: {
    json: {
      content: [
        {
          content: [{ value: projectDescription }],
        },
      ],
    },
  },
  ...props
}) {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen((prev) => !prev);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.min.md);

  const body = (
    <ModalBody>
      <Block style={{ position: "relative" }}>
        <ModalImg src={imgUrl} alt="project" layout="fill" />
      </Block>
      <ModalContent>
        <Block justify="flex-end" align="center" style={{ paddingBottom: 8 }}>
          <CloseBtn onClick={onClose}>
            <MdClose style={{ fontSize: 30 }} />
          </CloseBtn>
        </Block>
        <Block direction="column">
          <h1>{title}</h1>
          <p style={{ maxHeight: 100, overflowY: "scroll" }}>
            {projectDescription}
            've Created a completed traductor calling an API from google
            translate, it can use all languages supported by google's API using
            just Vanilla Javascript and
          </p>
          <PreviewBtn href={link} size={20} color="#ddd" fontWeight="bold">
            Preview
          </PreviewBtn>
        </Block>
      </ModalContent>
    </ModalBody>
  );

  return (
    <>
      <Container onClick={onOpen} {...props}>
        <ProjectImg src={imgUrl} layout="fill" alt={`project-${title}`} />
        <Mask align="center" justify="center">
          <Title fontSize={18} fontWeight={600}>
            {title}
          </Title>
        </Mask>
      </Container>
      <Modal open={open} onClose={onClose}>
        {body}
      </Modal>
    </>
  );
}

export default Project;
