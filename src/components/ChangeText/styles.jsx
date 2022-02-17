import styled from 'styled-components'

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