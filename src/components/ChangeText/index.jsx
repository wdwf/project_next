import { WrapperTextContent, TextContent, SlideContent } from './styles'

function ChangeText({text}) { 
  return (
    <WrapperTextContent>
      <TextContent>
        {text}
      </TextContent>

      <SlideContent/>
    </WrapperTextContent>
  )
}

export default ChangeText;