import {
  Container, Title, Locations,
  GalleryImages, Card, ContentText,
  TitleCard, Spot
} from './styles';

import Point from '../../assets/point.svg';

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
              <TitleCard>Society Caffe</TitleCard>
              <Spot>
                <Point/>
                <p>Purwokerto, Central Java</p>
              </Spot>
            </ContentText>
          </Card>

          <Card>
            <img src="/imageThree.png" />
            <ContentText>
              <TitleCard>Society Caffe</TitleCard>
              <Spot>
                <Point/>
                <p>Purwokerto, Central Java</p>
              </Spot>
            </ContentText>
          </Card>
        </GalleryImages>
        
      </Locations>
    </Container>
  )
}

export default SectionThird;