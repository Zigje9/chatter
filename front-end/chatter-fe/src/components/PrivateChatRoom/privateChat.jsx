import React from 'react';
import styled from 'styled-components';
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline';

const ChatBox = styled.div`
  position: fixed;
  width: 350px;
  height: 480px;
  margin: 0 auto;
  top: 100px;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: white;
  border-radius: 15px;
`;

const ChatHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
`;

const CloseIcon = styled(CloseCircleOutline)`
  width: 30px;
  height: 30px;
  fill: red;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const ChatContent = styled.div`
  position: absolute;
  top: 40px;
  height: 400px;
  width: 100%;
  background-color: #e8f6ff;
`;

const PrivateChat = () => {
  return (
    <ChatBox>
      <ChatHeader>
        <CloseIcon></CloseIcon>
      </ChatHeader>
      <ChatContent></ChatContent>
    </ChatBox>
  );
};

export default PrivateChat;
