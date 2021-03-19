import styled from 'styled-components'
import Block from '../components/basics/Block'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Figure from '../components/Figure'
import { useMediaQuery } from "@material-ui/core";
//import styles from '../styles/Home.module.css'

export default function Home() {

  const match = useMediaQuery('(min-width: 780px)')

  return (
    <Container direction="column">
       <Header/>
       <Section>
        <Hero/>
       { !match ? <FigureJ width={250} height={270}/> : <Figure/>}
      </Section>
    </Container>
  )
}

const Container = styled(Block)`
  background-color: ${({ theme }) => theme.bg.main};
  min-width: ${({ theme }) => theme.size('px', 350)};
  min-height: 100vh;
  padding: 0 0.5rem;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  @media only screen and (min-width: 780px) {
    && {
      flex-direction: row;
      justify-content: space-between;
    }
}
`

const FigureJ = styled(Figure)`
  margin: ${({ theme }) => theme.size('px', 60)} 0;
`

const H1 = styled.h1`
  color: ${({ theme }) => theme.text.primary};
`
