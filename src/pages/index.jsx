import Head from 'next/head';

import { 
  Container, 
} from '../styles/Home';

import SectionMain from '../components/SectionMain';
import SectionSecondary from '../components/SectionSecondary';
import Footer from '../components/Footer';


function Home() {

  return (
    <Container>
      <Head>
        <title>Find your Caffe</title>
        <meta name="description" content="Landing Page About Caffe" />
      </Head>

      <SectionMain/>

      <SectionSecondary/>
      
      <Footer/>

    </Container>
  )
}

export default Home
