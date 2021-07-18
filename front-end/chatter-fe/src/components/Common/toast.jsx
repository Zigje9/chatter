import React from 'react';
import styled, { keyframes } from 'styled-components';
import { New } from '@styled-icons/entypo/New';

const fadeIn = keyframes`
  0% {
    transform: translateY(100%);
  } ,
  100% {
    transform: none;
  }
`;
const ToastBox = styled.div`
  width: 300px;
  height: 150px;
  background-color: white;
  border: thick double steelblue;
  position: fixed;
  bottom: 0;
  right: 0;
  animation: ${fadeIn} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
`;

const ToastHeader = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ToastBody = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ToastContent = styled.span`
  font-size: 12px;
  color: steelblue;
`;

const ToastUser = styled.span`
  width: 80%;
  font-size: 20px;
  color: steelblue;
`;

const ToastNewIcon = styled(New)`
  width: 25px;
  color: red;
`;

const Toast = ({ ...props }) => {
  return (
    <ToastBox>
      <ToastHeader>
        <ToastNewIcon></ToastNewIcon>
        <ToastUser>From {props.msgInfo.from_name}</ToastUser>
      </ToastHeader>
      <ToastBody>
        <ToastContent>"{props.msgInfo.msg}"</ToastContent>
      </ToastBody>
    </ToastBox>
  );
};

export default Toast;
