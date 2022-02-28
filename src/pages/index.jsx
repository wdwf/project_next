import Head from 'next/head'


import ArrowRight from '../assets/arrow-right.svg'
import Search from '../assets/search-normal.svg'

import { 
  Container, 

  WrapperContentSecondary,TitleSecond, LeftContainer,
  RightContainer, SearchWrapper, InputCaffe,
  ListCaffe, InfoCaffe, InfoCaffeTitle, InfoTitle,
  Amount
} from '../styles/Home';

import ChangeText from '../components/ChangeText';
import SectionMain from '../components/SectionMain'

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

      <SectionMain/>

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
