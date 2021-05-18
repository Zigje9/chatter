import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import Container from '../Common/container'
import ToggleButton from "./toggleButton";


const left = {
  default: "92%",
  hover: "90%",
  open: "5%",
}

const SignUpForm = ({onChangeHeight}) => {
  const [curLeft, setLeft] = useState(left.default)
  const formRef = useRef(null)

  const handleHoverForm = (e) => {
    const {type} = e
    if (curLeft === left.open) {
      return
    }
    if (type === "mouseenter") {
      setLeft(left.hover)
    } else if (type === "mouseleave") {
      setLeft(left.default)
    }
  }

  const handleToggleForm = (e) => {
    e.stopPropagation()
    const {currentTarget} = e
    if (currentTarget.tagName === "BUTTON") {
      setLeft(left.default)
      onChangeHeight("400px")
    } else if (currentTarget.tagName === "DIV") {
      setLeft(left.open)
      onChangeHeight(`${currentTarget.scrollHeight}px`)
    }
  }

  return (
    <Container
      width="70%"
      height="600px"
      bgColor="green"
      position="absolute"
      top="0px"
      left={curLeft}
      transition="0.5s ease"
      ref={formRef}
      onOver={handleHoverForm}
      onLeave={handleHoverForm}
      onClick={handleToggleForm}
    >
      <ToggleButton onClose={handleToggleForm}/>
    </Container>
  )
}

export default SignUpForm