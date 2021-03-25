import React from "react";
import { Container, Title, ProjectImg, Mask } from "./styles";

function Project({ title, desc, img: { url: imgUrl }, link, ...props }) {
  return (
    <Container {...props}>
      <ProjectImg src={imgUrl} layout="fill" alt={`project-${title}`} />
      <Mask align="center" justify="center">
        <Title fontSize={18} fontWeight={600}>
          {title}
        </Title>
      </Mask>
    </Container>
  );
}

export default Project;
