import {
  Container,TitleSecond, WrapperContent, LeftContainer,
  RightContainer, SearchWrapper, InputCaffe,
  ListCaffe, InfoCaffe, InfoCaffeTitle, InfoTitle,
  Amount
} from './styles';

import ArrowRight from '../../assets/arrow-right.svg';
import Search from '../../assets/search-normal.svg';

import ChangeText from '../ChangeText';

function SectionSecondary() {
  return (
    <Container id="search">
      <WrapperContent>
        <LeftContainer>
          <TitleSecond>
            <p>Search your<span></span></p>
            <p>favorite caffe</p>
          </TitleSecond>
          <ChangeText/>
        </LeftContainer>

        <RightContainer>

          <SearchWrapper>
            <InputCaffe placeholder='Search name caffe or location here'/>
            <Search/>
          </SearchWrapper>

          <ListCaffe>
            <p>List Caffe</p>
            <a href="#">
              <span>See all</span>
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
      </WrapperContent>
    </Container>
  )
}

export default SectionSecondary;