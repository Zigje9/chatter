import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  height: ${(props) => props.height ? props.height: "100vh"};
  width: ${(props) => props.width ? props.width: "100vw"};
  background-color: ${(props) => props.bgColor ? props.bgColor : "none"};
`;

const container = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default container;
