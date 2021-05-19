import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position};
  background-color: ${(props) => props.bgColor};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  transition: ${(props) => props.transition};
`;

Container.defaultProps = {
  flexDirection: "row",
  justifyContent: "center",
  position: "static",
  height: "100vh",
  width: "100vw",
  padding: "0px",
  bgColor: "none",
  overflow: "visible",
  transition: "all 0s ease 0s",
  top: "auto",
  bottom: "auto",
  left: "auto",
  right: "auto",
}

const container = ({ children, onOver, onLeave, onOpen, ...props }) => {
  return (
    <Container
      onMouseEnter={onOver}
      onMouseLeave={onLeave}
      onClick={onOpen}
      {...props}
    >
      {children}
    </Container>);
};

export default container;
