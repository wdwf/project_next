import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  
`

export const WrapperContainerMain = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
`

export const CoverImage = styled.img`
  height: 100%;
`

export const WrapperContent = styled.article`
  width: 100%;
  padding: 0 50px;
  color: ${props => props.theme.colors.text_primary};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;

      h1 {
        margin-left: 10px;
      }
    }

    img {
      cursor: pointer;
    }
  }
`

export const TitleMain = styled.div`
  margin: 80px 0 40px 0;

  p {
    font-size: 3.5em;
    font-weight: bold;
    display: flex;
    align-items: center;

    span {
      display: inline-block;
      width: 70px;
      height: 6px;
      background-color: ${props => props.theme.colors.text_primary};
      margin-right: 10px;
    }
  }
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const ButtonFind = styled.div`
  display: flex;
  width: fit-content;
  height: 24px;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.colors.text_primary_opacity};
  
  &:hover {
    color: ${props => props.theme.colors.text_primary};
    transition: color .20s ease-in;
  }
  
  p {
    margin-right: 5px;
  }
`

export const ButtonScroll = styled.a`
  width: 100px;
  height: 50px;
  position: relative;
  cursor: pointer;
  color: ${props => props.theme.colors.text_primary_opacity};
  animation: scrollMove 500ms alternate infinite;

  svg {
    transform: scale(.5,.5);
  }

  p {
    transform: rotate(90deg);
    position: absolute;
    top: -20px;
    left: 20%;
  }

  @keyframes scrollMove {
    from { top: 10px }
    to { top: -10px }
  }
`


export const WrapperContainerSearch = styled.section`
  width: 100%;
  height: 100vh;
`


export const WrapperContentSecondary = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2%;
  display: flex;
`

export const TitleSecond = styled.div`
  margin-bottom: 30px;

  p {
    font-size: 3.5em;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.text_primary};

    span {
      display: inline-block;
      width: 50px;
      height: 6px;
      background-color: ${props => props.theme.colors.text_primary};
      margin-left: 10px;
    }
  }
`

export const LeftContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`


export const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2%;
`

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
`

export const InputCaffe = styled.input`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.text_primary};
  font-size: .90em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 90%;
  outline: none;
`

export const ListCaffe = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;

  p {
    font-weight: 700;
    color: ${props => props.theme.colors.text_primary};
  }

  a {
    display: flex;
    text-decoration: none;

    p {
      font-weight: 500;
      color: ${props => props.theme.colors.text_primary_opacity};
      
    }
  }
`

export const InfoCaffe = styled.div`
  width: 100%;
  margin-bottom: 10px;

  ul {
    list-style: none;

    li {
      color: ${props => props.theme.colors.text_primary};
    }

    
    &::before {
      content:'';
      width: 5px;
      height: 2px;
      background-color: ${props => props.theme.colors.text_primary_opacity};
    }
  } 
`

export const InfoCaffeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`
export const InfoTitle = styled.p`
  font-size: 1.2em;
  color: ${props => props.theme.colors.text_primary};
`

export const Amount = styled.p`
  font-size: 1.2em;
  color: ${props => props.theme.colors.text_primary_opacity};
`
