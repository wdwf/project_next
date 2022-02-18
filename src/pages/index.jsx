import Head from 'next/head'

import Logo from '../assets/logo.svg'
import ArrowRight from '../assets/arrow-right.svg'
import Arrow from '../assets/arrow.svg'
import Search from '../assets/search-normal.svg'

import ChangeText from '../components/ChangeText'

import { 
  Container, WrapperContainerMain, WrapperContent,
  CoverImage, TitleMain, WrapperButton, 
  ButtonFind, ButtonScroll,

  WrapperContentSecondary,TitleSecond, LeftContainer,
  RightContainer, SearchWrapper, InputCaffe,
  ListCaffe, InfoCaffe, InfoCaffeTitle, InfoTitle,
  Amount
} from '../styles/Home'

function Home() {

  function scrollIdOnClick(event) {
    console.log(event);
  }

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

            <ButtonScroll onClick={scrollIdOnClick} id='scroll' href="#search">
              <p>Scroll</p>
              <Arrow/>
            </ButtonScroll>
          </WrapperButton>

        </WrapperContent>
      </WrapperContainerMain>

      <WrapperContentSecondary id="search">
        <LeftContainer>
          <TitleSecond>
            <p>Search your<span></span></p>
            <p>favorite caffe</p>
          </TitleSecond>
          <ChangeText text={
          `
            Find a cafe to hang out or work wherever you 
            want, we have a large list of cafes that are 
            definitely suitable for you.
          `
          } />
        </LeftContainer>

        <RightContainer>

          <SearchWrapper>
            <InputCaffe placeholder='Search name caffe or location here'/>
            <Search/>
          </SearchWrapper>

          <ListCaffe>
            <p>List Caffe</p>
            <a href="#">
              <p>See all</p>
              <ArrowRight/>
            </a>
          </ListCaffe>

          <InfoCaffe>
            <InfoCaffeTitle>
              <InfoTitle>Purworkerto</InfoTitle>
              <Amount>24 caffe</Amount>
            </InfoCaffeTitle>
            <hr />
            <ul>
              <li>Level Up Caffe</li>
              <li>Warunk Upnormal</li>
              <li>Society Coffe House</li>
              <li>Buntos Caffe</li>
            </ul>

            <a href="#">
              <p>See all</p>
              <ArrowRight/>
            </a>
          </InfoCaffe>

          <InfoCaffe>
            <InfoCaffeTitle>
              <InfoTitle>Semarang</InfoTitle>
              <Amount>24 caffe</Amount>
            </InfoCaffeTitle>
            <hr />
            <ul>
              <li>Anagata Caffe</li>
              <li>Excelso Coffe Rinjani</li>
              <li>Joltown Coffe & Resto</li>
              <li>Boskaf Coffe</li>
            </ul>

            <a href="#">
              <p>See all</p>
              <ArrowRight/>
            </a>
          </InfoCaffe>
          
        </RightContainer>
      </WrapperContentSecondary>
      

    </Container>
  )
}

export default Home
