import Head from 'next/head'

import cover from '../assets/cover.png'
import Logo from '../assets/logo.svg'
import menu from '../assets/menu.png'
import ArrowRight from '../assets/arrow-right.svg'
import Arrow from '../assets/arrow.svg'

import { 
  Container, WrapperContainer, WrapperContent,
  CoverImage, WrapperTitle, WrapperTextContent,
  TextContent, SlideContent, WrapperButton, 
  ButtonFind, ButtonScroll
} from '../styles/Home'

function Home() {
  return (
    <Container>
      <Head>
        <title>Find your Caffe</title>
        <meta name="description" content="Landing Page About Caffe" />
      </Head>

      <WrapperContainer>
        <CoverImage
          src={cover}
        />
        <WrapperContent>
          <header>
            <div>
              <Logo /> 
              <h1>Njugur</h1>
            </div>
            <img src={menu}/>
          </header>

          <WrapperTitle>
            <p>Find your</p>
            <p><span></span>favorite caffe</p>
          </WrapperTitle>

          <WrapperTextContent>
            <TextContent>
              Don't be confused looking for a cafe for now, you 
              are lucky to open our platform, just look for the 
              cafe you want to visit.
            </TextContent>

            <SlideContent/>
          </WrapperTextContent>

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
      </WrapperContainer>
      

    </Container>
  )
}

export default Home
