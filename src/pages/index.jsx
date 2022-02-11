import Head from 'next/head'

import LogoAvatar from '../assets/avatar.svg'
import { Container } from '../styles/pages/Home'

function Home() {
  return (
    <Container>
      <Head>
        <title>Find your Caffe</title>
        <meta name="description" content="Landing Page About Caffe" />
      </Head>

      <LogoAvatar />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js struture made by Weslley</p>
    </Container>
  )
}

export default Home
