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
import AboutMe from "../components/About-me";

export default function Home({ projects = [], experiences = [], Author }) {
  const match = useMediaQuery("(min-width: 780px)");
  console.log("data", {
    projects,
    experiences,
  });

  const renderProjects = () => {
    return projects.map((project, i) => <Project key={i} {...project} />);
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
          img {
            url
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
      projectsCollection: projects,
      experienceCollection: experiences,
      authorCollection: {
        items: [AuthorItems],
      },
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
