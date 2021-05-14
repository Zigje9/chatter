import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  height: 100vh;
  width: 100vw;
`;

const container = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default container;
