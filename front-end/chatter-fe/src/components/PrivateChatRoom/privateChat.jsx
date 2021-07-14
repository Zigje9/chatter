import React from 'react';
import styled from 'styled-components';
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline';
import PrivateChatInput from '../Common/privateChatInput';
import { useSelector } from 'react-redux';
import getSpecificChatLog from '../../utils/getSpecificChatLog';

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

const PrivateChat = ({ ...props }) => {
  const close = props.modalClose;
  const { from, roomName } = props.roomInfo;
  const everyPrivateLog = useSelector((state) => state.socket.privateChatLog);
  const specificChatLog = getSpecificChatLog(everyPrivateLog, roomName);
  console.log(specificChatLog);
  return (
    <ChatBox>
      <ChatHeader>
        <CloseIcon onClick={() => close()}></CloseIcon>
      </ChatHeader>
      <ChatContent></ChatContent>
      <PrivateChatInput roomInfo={{ from, roomName }}></PrivateChatInput>
    </ChatBox>
  );
};

export default PrivateChat;
