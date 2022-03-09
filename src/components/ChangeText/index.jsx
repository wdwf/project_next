import { useState, useEffect } from 'react'
import { WrapperTextContent, TextContent, SlideContent} from './styles'

function ChangeText({text}) { 

  let texts = [
  `
    Don't be confused looking for a cafe for now, you 
    are lucky to open our platform, just look for the 
    cafe you want to visit.
  `,
  `
    Lorem, ipsum dolor sit amet consectetur adipisicing 
    elit. Aperiam consequatur laborum, excepturi a vel 
    illum facere sed non.
  `
  ]
  
  const [value, setValue] = useState(0)
  const [frase, setFrase] = useState(0)

  useEffect(() =>  {
    const interval = setTimeout(() => {
      if (value === 100) {
        setFrase(frase + 1 < texts.length ? frase + 1 : 0)
        setValue(0)
      }
      setValue(value => value + 1)
    }, 100);
    return () => clearTimeout(interval)
  });

  return (
    <WrapperTextContent>
      <TextContent>
        {texts[frase]}
      </TextContent>

      <SlideContent>
        <div className='line' style={{width: `${value}%`}} />
      </SlideContent>
    </WrapperTextContent>
  )
}

export default ChangeText;