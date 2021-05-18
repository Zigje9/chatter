import React from "react"
import styled from "styled-components"

const StyledToggleButton = styled.button`
  background-color: blue;
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 3px;
    margin: 0 auto;
    background-color: green;
    transform: translate(-50%, -50%);
  };
  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  };
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg)
  }
`

const ToggleButton = ({onClose}) => {
  return (
    <StyledToggleButton onClick={onClose}/>
  )
}

export default ToggleButton