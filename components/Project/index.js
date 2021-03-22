import React from "react";
import { Container, Title, ProjectImg } from "./styles";

function Project({ title, desc, imgUrl, link }) {
  return (
    <Container>
      <ProjectImg src={imgUrl} layout="fill" alt={`project-${title}`} />
      <Title fontSize={18} fontWeight={600}>
        {title}
      </Title>
    </Container>
  );
}

export default Project;
