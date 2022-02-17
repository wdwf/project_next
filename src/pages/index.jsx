import Head from 'next/head'

import Logo from '../assets/logo.svg'
import ArrowRight from '../assets/arrow-right.svg'
import Arrow from '../assets/arrow.svg'

import ChangeText from '../components/ChangeText'

import { 
  Container, WrapperContainerMain, WrapperContent,
  CoverImage, TitleMain, WrapperButton, 
  ButtonFind, ButtonScroll,

  WrapperContentSecondary,TitleSecond
} from '../styles/Home'

function Home() {

  // function scrollIdOnClick() {
  //   console.log('clicou');
  // }

  return (
    <Container>
      <Head>
        <title>Find your Caffe</title>
        <meta name="description" content="Landing Page About Caffe" />
      </Head>

      <WrapperContainerMain>
        <CoverImage
          src='/cover.png'
        />
        <WrapperContent>
          <header>
            <div>
              <Logo /> 
              <h1>Njugur</h1>
            </div>
            <img src='/menu.png'/>
          </header>

          <TitleMain>
            <p>Find your</p>
            <p><span></span>favorite caffe</p>
          </TitleMain>

          <ChangeText text={ `
            Don't be confused looking for a cafe for now, you 
            are lucky to open our platform, just look for the 
            cafe you want to visit.
          `}/>

          <WrapperButton>
            <ButtonFind>
              <p>Find your caffe</p> 
              <ArrowRight/>
            </ButtonFind>

            <ButtonScroll>
              <p>Scroll</p>
              <Arrow/>
            </ButtonScroll>
          </WrapperButton>

        </WrapperContent>
      </WrapperContainerMain>

      <WrapperContentSecondary>
        <TitleSecond>
          <p>Search your<span></span></p>
          <p>favorite caffe</p>
        </TitleSecond>
        <h2>Search your favority caffe</h2>
        <ChangeText text={
        `
          Find a cafe to hang out or work wherever you 
          want, we have a large list of cafes that are 
          definitely suitable for you.
        `
        } />
      </WrapperContentSecondary>
      

    </Container>
  )
}

export default Home
