import React, {useState} from 'react'
import styled from 'styled-components'
import Container from '../Common/container'
import ToggleButton from "./toggleButton";
import HamburgerBar from "./hamburgerBar";


const left = {
  default: "92%",
  hover: "90%",
  open: "5%",
}

const SignUpForm = ({onChangeHeight}) => {
  const [curLeft, setLeft] = useState(left.default)

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
      width="100%"
      height="600px"
      bgColor="#4286f5"
      position="absolute"
      top="0px"
      left={curLeft}
      transition="0.5s ease"
      onOver={handleHoverForm}
      onLeave={handleHoverForm}
      onClick={handleToggleForm}
    >
      {curLeft === left.default && <HamburgerBar vertical={true} top="3%" left="1.5%"/>}
      <ToggleButton onClose={handleToggleForm}/>
    </Container>
  )
}

export default SignUpForm