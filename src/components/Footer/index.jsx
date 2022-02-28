import {
  Container, WrapperContent, SocialNetworks,
  LogoCompany, Rights
} from './styles';

import Logo from '../../assets/logo.svg';

function Footer() {
  return (
    <Container>
      <WrapperContent>
        <SocialNetworks>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </SocialNetworks>

        <LogoCompany href='#'>
            <Logo /> 
            <h3>Njugur</h3>
        </LogoCompany>

        <Rights>
          © 2021 Njugur, All Right Reserveed
        </Rights>
      </WrapperContent>
      
    </Container>
  )
}

export default Footer;