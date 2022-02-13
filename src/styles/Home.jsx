import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
`

export const WrapperContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.background_primary};
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

export const WrapperTitle = styled.div`
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

export const WrapperTextContent = styled.div`
  max-width: 450px;
  width: 100%;
  margin-bottom: 40px;
`

export const TextContent = styled.p`
  line-height: 36px;
  color: ${props => props.theme.colors.text_primary_opacity};
`

export const SlideContent = styled.div`
  width: 440px;
  height: 2px;
  margin-top: 40px;
  position: relative;
  background-color: ${props => props.theme.colors.light};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #004077;
    width: 0;
    height: 100%;
    animation: fill 8s linear infinite;
  }

  @keyframes fill {
    from {width: 0}
    to {width:100%}
  }
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonFind = styled.div`
  display: flex;
  width: fit-content;
  height: 24px;
  align-items: center;
  cursor: pointer;

  :hover {
    color: ${props => props.theme.colors.text_primary};
  }

  p {
    margin-right: 5px;
  }
`

export const ButtonScroll = styled.div`
  width: 100px;
  height: 50px;
  position: relative;
  cursor: pointer;

  svg {
    transform: scale(.5,.5);
  }

  p {
    transform: rotate(90deg);
    position: absolute;
    top: -20px;
    left: 20%;
  }

`