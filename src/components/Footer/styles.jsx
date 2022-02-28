import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 95px;
`;

export const WrapperContent = styled.section`
  width: 90%;
  height: 100%;
  border-top: 2px solid ${props => props.theme.colors.light};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a {
    text-decoration: none;
  }
`;

export const SocialNetworks = styled.section`
  
  ul {
    display: flex;
    list-style: none;
    
    li {
      margin: 0 15px 0 0;
      a {
        color: ${props => props.theme.colors.text_primary_opacity};
      }
    }
  }
`;

export const LogoCompany = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 24px;
    margin-left: 10px;
    color: ${props => props.theme.colors.text_primary};
  }
  
  img {
    cursor: pointer;
  }
`;

export const Rights = styled.p`
  color: ${props => props.theme.colors.text_primary_opacity};
`;