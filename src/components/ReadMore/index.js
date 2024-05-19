import {useState} from 'react'

import {
  ToggleButtons,
  Description,
  ImageEl,
  SubHead,
  MainHeading,
  BgContainer,
} from './styledComponents'

function ReadMore(props) {
  const [curState, toggleState] = useState(true)
  const {reactHooksDescription} = props
  const text = curState
    ? reactHooksDescription.slice(0, 170)
    : reactHooksDescription
  const curText = curState ? 'Read More' : 'Read Less'

  const toggleView = () => toggleState(prevState => !prevState)

  return (
    <BgContainer>
      <MainHeading>React Hooks</MainHeading>
      <SubHead>Hooks are a new addition to React</SubHead>
      <ImageEl
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{text}</Description>
      <ToggleButtons type="button" onClick={toggleView}>
        {curText}
      </ToggleButtons>
    </BgContainer>
  )
}

export default ReadMore
