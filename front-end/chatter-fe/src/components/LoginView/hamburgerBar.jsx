import React from 'react'
import styled from "styled-components"

const StyledHamburgerBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 20px;
  height: 15px;
  transform: ${(props) => props.transform};
  & div {
    width: 100%;
    height: 2px;
    background-color: #679df6;
  }
`

StyledHamburgerBar.defaultProps = {
  transform: "none",
  top: "auto",
  bottom: "auto",
  left: "auto",
  right: "auto"
}

const HamburgerBar = ({vertical, ...props}) => {
  return (
    <StyledHamburgerBar transform={vertical && "rotate(90deg)"} {...props}>
      <div/>
      <div/>
      <div/>
    </StyledHamburgerBar>
  )
}

export default HamburgerBar