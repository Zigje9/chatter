import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  flex-grow: ${(props) => props.flexGrow};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position};
  background-color: ${(props) => props.bgColor};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  transition: ${(props) => props.transition};
  margin: ${(props) => props.margin};
  box-shadow: ${(props) => props.boxShadow};
  border: ${(props) => props.border};
  ${(props) => (props.isHover ? '&:hover { background-color: #fcbb7e; cursor: pointer;}' : '')};
`;

Container.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '0',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'static',
  height: '100vh',
  width: '100vw',
  borderRadius: '0',
  padding: '0px',
  bgColor: 'none',
  overflow: 'visible',
  transition: 'all 0s ease 0s',
  top: 'auto',
  bottom: 'auto',
  left: 'auto',
  right: 'auto',
  margin: '0px',
  boxShadow: 'none',
  isHover: false,
};

const container = ({ children, styles, onOver, onLeave, onOpen, ...props }) => {
  return (
    <Container {...styles} {...props} onMouseEnter={onOver} onMouseLeave={onLeave} onClick={onOpen}>
      {children}
    </Container>
  );
};

export default container;
