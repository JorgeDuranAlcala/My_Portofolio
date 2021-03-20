import Header from "../components/Header";
import Hero from "../components/Hero";
import Figure from "../components/Figure";
import Text from '../components/Text'
import { useMediaQuery } from "@material-ui/core";
import { Section, SubTitle, Container, FigureJ, SeeMoreBtn, ProfileImg, AboutMeText } from "./styles";
import Project from "../components/Project";

export default function Home() {
  const match = useMediaQuery("(min-width: 780px)");

  const renderProjects = () => {
    return [1,2,3].map((_, i) => <Project key={i}/>)
  }

  return (
    <Container direction="column">
      <Header />
      <Section>
        <Hero />
        {!match ? <FigureJ width={250} height={270} /> : <Figure />}
      </Section>

      <SubTitle>My work</SubTitle>
      <Section>
        {renderProjects()}
        <SeeMoreBtn>See More</SeeMoreBtn>
      </Section>

      <SubTitle>About me</SubTitle>
      <Section>
          <ProfileImg 
            src="\profile-picture.png" 
          />
          <AboutMeText variant="body1" size={20} fontweight={300}>
            <Text fontweight={600}>
              I'm a <Text variant="caption" secondary="true">freelancer</Text>
            </Text>
             ipsum dolor sit amet, consectetur adipiscing elit. Dignissim nascetur dolor, diam morbi pretium ac nibh. Aliquam pharetra, sed  diam   ut. Netus vitae etiam fringilla urna, sed massa felis, massa at. Feugiat cursus ornare adipiscing posuere augue turpis nunc. Tellus     ultrices magna fermentum felis imperdiet montes, pellentesque. Duis ac nisl in blandit dis vestibulum aenean quam malesuada.
          </AboutMeText>
      </Section>

    </Container>
  );
}
