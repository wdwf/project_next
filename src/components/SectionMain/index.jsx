import { 
  WrapperContainerMain, WrapperContent,
  CoverImage, TitleMain, WrapperButton, 
  ButtonFind, ButtonScroll,
} from './styles';

import Logo from '../../assets/logo.svg';
import Arrow from '../../assets/arrow.svg';
import ArrowRight from '../../assets/arrow-right.svg'


import ChangeText from '../ChangeText';

function SectionMain() {

  function scrollIdOnClick(event) {
    console.log(event);
  }

  return (
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
  )
}

export default SectionMain;
