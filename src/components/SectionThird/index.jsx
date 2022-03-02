import {
  Container, Title, Locations,
  GalleryImages, Card, ContentText,
  TitleCard, Spot, SectionNumber,
  WrapperArrow, ButtonLeft, ButtonRight
} from './styles';

import Point from '../../assets/point.svg';
import Arrow from '../../assets/arrow.svg';

function SectionThird() {
  return (
    <Container>
      <Title><span></span> There's a Discount</Title>
      <Locations>
        <GalleryImages>
          <Card>
            <img src="/imageOne.png" />
            <ContentText>
              <TitleCard>Society Caffe</TitleCard>
              <Spot>
                <Point/>
                <p>Purwokerto, Central Java</p>
              </Spot>
            </ContentText>
          </Card>

          <Card>
            <img src="/imageTwo.png" />
            <ContentText>
              <TitleCard>Semlehoy Coffe</TitleCard>
              <Spot>
                <Point/>
                <p>Purwokerto, Central Java</p>
              </Spot>
            </ContentText>
          </Card>

          <Card>
            <img src="/imageThree.png" />
            <ContentText>
              <TitleCard>Teco Caffe</TitleCard>
              <Spot>
                <Point/>
                <p>Purwokerto, Central Java</p>
              </Spot>
            </ContentText>
          </Card>
        </GalleryImages>
        <SectionNumber>
          <ul>
            <li><a href="#">01</a></li>
            <li><a href="#">02</a></li>
            <li><a href="#">03</a></li>
            <li><a href="#">04</a></li>
          </ul>
          <WrapperArrow>
            <ButtonLeft>
              <Arrow/>
            </ButtonLeft>
            <ButtonRight>
              <Arrow/>
            </ButtonRight>
          </WrapperArrow>
        </SectionNumber>

      </Locations>
    </Container>
  )
}

export default SectionThird;