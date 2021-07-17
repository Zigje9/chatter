import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline';
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';
import PrivateChatInput from '../Common/privateChatInput';
import DateBox from '../Common/date';
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

const MyMessageBox = styled.div`
  background-color: #e8f6ff;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MyMessageContent = styled.div`
  position: relative;
  color: white;
  height: 40px;
  padding: 13px;
  background: #9ac5ff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  font-size: 12px;
  right: 10px;
  margin: 3px 0;
  text-overflow: ellipsis;
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 5px 0 5px 10px;
    border-color: transparent #9ac5ff;
    display: block;
    width: 0;
    z-index: 1;
    right: -10px;
    top: 16px;
  }
`;

const OtherMessageBox = styled.div`
  background-color: #e8f6ff;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const OtherMessageContent = styled.div`
  position: relative;
  height: 40px;
  padding: 13px;
  background: pink;
  color: white;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  font-size: 12px;
  left: 10px;
  margin: 3px 0;
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 5px 10px 5px 0;
    border-color: transparent pink;
    display: block;
    width: 0;
    z-index: 1;
    left: -10px;
    top: 16px;
  }
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
            if (to !== userId) {
              return (
                <MyMessageBox key={`${from}_${to}_${idx}`}>
                  <DateBox right={true} date={date}></DateBox>
                  <MyMessageContent>{msg}</MyMessageContent>
                </MyMessageBox>
              );
            } else {
              return (
                <OtherMessageBox key={`${from}_${to}_${idx}`}>
                  <OtherMessageContent>{msg}</OtherMessageContent>
                  <DateBox left={true} date={date}></DateBox>
                </OtherMessageBox>
              );
            }
          })}
        </ChatContainer>
      </ChatContent>
      <PrivateChatInput roomInfo={{ from, roomName }}></PrivateChatInput>
    </ChatBox>
  );
};

export default PrivateChat;
