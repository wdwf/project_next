import styled from 'styled-components'

export const WrapperContainerMain = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
`

export const CoverImage = styled.img`
  height: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
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
