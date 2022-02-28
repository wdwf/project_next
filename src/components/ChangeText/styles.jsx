import styled from 'styled-components'

export const WrapperTextContent = styled.div`
  max-width: 450px;
  width: 100%;
  margin-bottom: 40px;
`

export const TextContent = styled.p`
  max-width: 500px;
  line-height: 36px;
  color: ${props => props.theme.colors.text_primary_opacity};
  transition: hover 2s linear 1s;
`;

export const SlideContent = styled.div`
  width: 440px;
  height: 2px;
  margin-top: 40px;
  background-color: ${props => props.theme.colors.line};

  & .line {
    background-color: ${props => props.theme.colors.background_secondary};
    width: 0%;
    height: 100%;
    animation: grow 3100ms linear infinite;
  }

  @keyframes grow {
    100% {width: 100%}
  }
`