import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    transform: translateY(100%);
  } ,
  100% {
    transform: none;
  }
`;
const ToastBox = styled.div`
  width: 200px;
  height: 100px;
  background-color: gray;
  position: fixed;
  bottom: 0;
  right: 0;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Toast = () => {
  return <ToastBox></ToastBox>;
};

export default Toast;
