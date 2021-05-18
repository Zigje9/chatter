import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgColor};
`;

Container.defaultProps = {
  height: "100vh",
  width: "100vw",
  bgColor: "none"
}

const container = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default container;
