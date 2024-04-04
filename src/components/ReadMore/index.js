// Write your code here
import {useState} from 'react'
import {Container1, Heading1, P1, P2, Image1, Button1} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [value, setValue] = useState(false)

  const getMoreValue = () => {
    setValue(prevState => !prevState)
  }
  const condition1 = reactHooksDescription.length
  const string1 = reactHooksDescription.slice(0, 170)
  const string2 = reactHooksDescription.slice(0, condition1)
  const text = value ? 'Read Less' : 'Read More'
  return (
    <Container1>
      <Heading1>React Hooks </Heading1>
      <P1>Hooks are a new addition to React</P1>
      <Image1
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <P2>{value ? string2 : string1} </P2>
      <Button1 type="button" onClick={getMoreValue}>
        {text}
      </Button1>
    </Container1>
  )
}

export default ReadMore
