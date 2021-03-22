import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Figure from "../components/Figure";
import Text from "../components/Text";
import Block from "../components/basics/Block";
import { useMediaQuery } from "@material-ui/core";
import {
  Section,
  SubTitle,
  Container,
  FigureJ,
  SeeMoreBtn,
  ProfileImg,
  AboutMeText,
  CardsContainer,
} from "../styles/styles";
import Project from "../components/Project";
import ExperienceCard from "../components/Experience-Card";
import ContactForm from "../components/Contact-Form";
import { fetchEntries } from "../utils/fetchEntries";
import { formatItems } from "../utils/format-contentful-data";

export default function Home({ projects }) {
  const match = useMediaQuery("(min-width: 780px)");

  //console.log("inside / page", projects);

  const renderProjects = () => {
    return projects.map((project, i) => <Project key={i} {...project} />);
  };

  const renderCards = () => {
    return [0, 0, 0].map((_, i) => <ExperienceCard key={i} />);
  };

  return (
    <Container direction="column">
      <Header />
      <Section>
        <Hero />
        {!match ? <FigureJ width={250} height={270} /> : <Figure />}
      </Section>

      <SubTitle>My work</SubTitle>
      <Section id="my-work-section">
        <Block direction="column">
          <Block wrap="wrap">{renderProjects()}</Block>
          <Block justify="center" align="center">
            <SeeMoreBtn>See More</SeeMoreBtn>
          </Block>
        </Block>
      </Section>

      <SubTitle>About me</SubTitle>
      <Section id="about-section">
        <ProfileImg src="\profile-picture.png" />
        <AboutMeText variant="body1" size={20} fontWeight={300}>
          <Text fontWeight={600}>
            I'm a{" "}
            <Text variant="caption" secondary="true">
              freelancer
            </Text>
          </Text>
          ipsum dolor sit amet, consectetur adipiscing elit. Dignissim nascetur
          dolor, diam morbi pretium ac nibh. Aliquam pharetra, sed diam ut.
          Netus vitae etiam fringilla urna, sed massa felis, massa at. Feugiat
          cursus ornare adipiscing posuere augue turpis nunc. Tellus ultrices
          magna fermentum felis imperdiet montes, pellentesque. Duis ac nisl in
          blandit dis vestibulum aenean quam malesuada.
        </AboutMeText>
      </Section>

      <SubTitle>Experience</SubTitle>
      <Section id="experience-section">{renderCards()}</Section>

      <SubTitle>Contact Me</SubTitle>
      <Section id="contact-me-section">
        <ContactForm />
      </Section>
    </Container>
  );
}

export async function getStaticProps() {
  try {
    const items = await fetchEntries({ "sys.contentType.sys.id": "projects" });
    const projects = formatItems(items, "projects");

    return {
      props: {
        projects,
      },
    };
  } catch (e) {
    throw new Error(e.message);
  }
}
