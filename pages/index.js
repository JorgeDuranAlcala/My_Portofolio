import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Figure from "../components/Figure";
import Block from "../components/basics/Block";
import { useMediaQuery } from "@material-ui/core";
import {
  Section,
  SubTitle,
  Container,
  FigureJ,
  SeeMoreBtn,
  ProfileImg,
} from "../styles/styles";
import Project from "../components/Project";
import ExperienceCard from "../components/Experience-Card";
import ContactForm from "../components/Contact-Form";
import { fetchEntries } from "../utils/fetchEntries";
import AboutMe from "../components/About-me";

export default function Home({ projects = [], experiences = [], Author }) {
  const match = useMediaQuery("(min-width: 780px)");

  const renderProjects = () => {
    return projects.map((project, i) => (
      <Project key={i} justifySelf="center" {...project} />
    ));
  };

  const renderCards = () => {
    return experiences.map((exp, i) => <ExperienceCard key={i} {...exp} />);
  };

  return (
    <Container direction="column">
      <Header />
      <Section>
        <Hero {...Author} />
        {!match ? <FigureJ width={250} height={270} /> : <Figure />}
      </Section>

      <SubTitle>My work</SubTitle>
      <Section id="my-work-section">
        <Block style={{ width: "100%" }} direction="column">
          <Block
            style={{ width: "100%" }}
            grid
            autoFit
            min="320px"
            max="1fr"
            autoFlow="dense"
            gap={15}
          >
            {renderProjects()}
          </Block>
          <Block justify="center" align="center">
            <SeeMoreBtn>See More</SeeMoreBtn>
          </Block>
        </Block>
      </Section>

      <SubTitle>About me</SubTitle>
      <Section id="about-section">
        <ProfileImg src="\profile-picture.png" />
        <AboutMe aboutMe={Author?.aboutMe} />
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
    const query = `
    query {
      projectsCollection {
        items {
          title
          link
          img {
            url
          }
          desc {
            json
          }
        }
      }
      authorCollection {
        items {
          heroTitle
          heroDesc
          aboutMe
        }
      }
      experienceCollection {
        items {
          title
          employerName
          startDate
          endDate
          experienceDesc {
            json 
          }
        }
      }
    }
    `;

    const {
      projectsCollection: projects = {},
      experienceCollection: experiences = {},
      authorCollection: { items: [AuthorItems] } = {},
    } = await fetchEntries(query);

    return {
      props: {
        projects: projects.items,
        experiences: experiences.items,
        Author: AuthorItems,
      },
    };
  } catch (e) {
    console.log(e.message);
  }
}
