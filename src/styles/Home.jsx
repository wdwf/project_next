import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
`;




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
