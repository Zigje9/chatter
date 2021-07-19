import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SelfMsgBox from './selfMsgBox';
import OtherMsgBox from './otherMsgBox';
import PrivateChatInput from '../Common/privateChatInput';
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline';
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';
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

const PartnerSpan = styled.span`
  width: 90%;
  color: black;
`;

const PartnerIcon = styled(UserCircle)`
  width: 30px;
  height: 30px;
  fill: gray;
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

const ChatContainer = styled.div`
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #e8f6ff;
  overflow-y: scroll;
`;

const PrivateChat = ({ ...props }) => {
  const close = props.modalClose;
  const { from, partner, roomName } = props.roomInfo;
  const everyPrivateLog = useSelector((state) => state.socket.privateChatLog);
  const { userId } = useSelector((state) => state.user);
  const specificChatLog = getSpecificChatLog(everyPrivateLog, roomName);

  const scrollRef = useRef();

  const scrollToBottom = () => {
    const { scrollHeight, clientHeight } = scrollRef.current;
    scrollRef.current.scrollTop = scrollHeight - clientHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [specificChatLog]);
  return (
    <ChatBox>
      <ChatHeader>
        <PartnerIcon></PartnerIcon>
        <PartnerSpan>{partner.userName}님</PartnerSpan>
        <CloseIcon onClick={() => close()}></CloseIcon>
      </ChatHeader>
      <ChatContent>
        <ChatContainer ref={scrollRef}>
          {specificChatLog.map((log, idx) => {
            const { from, to, msg, date } = log[roomName];
            return to !== userId ? (
              <SelfMsgBox key={`${from}_${to}_${idx}`} date={date} msg={msg} />
            ) : (
              <OtherMsgBox key={`${from}_${to}_${idx}`} date={date} msg={msg} />
            );
          })}
        </ChatContainer>
      </ChatContent>
      <PrivateChatInput roomInfo={{ from, roomName }}></PrivateChatInput>
    </ChatBox>
  );
};

export default PrivateChat;
