import Head from 'next/head'
import styled from 'styled-components'
import Block from '../components/basics/Block'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hey</h1>
    </Container>
  )
}

const Container = styled(Block)`
  background-color: ${({ theme }) => theme.bg.main};
  min-height: 100vh;
  padding: 0 0.5rem;
`
