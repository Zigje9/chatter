import React from 'react';
import styled from 'styled-components';
import RoomContainer from '../Common/container';
import ChatInput from '../Common/chatInput';
import PublicHeader from './header';
import { useSelector } from 'react-redux';

const ChatContainer = styled.div`
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

const MyMessageBox = styled.div`
  background-color: white;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MyMessageContent = styled.div`
  position: relative;
  color: white;
  height: 45px;
  padding: 15px;
  background: #9ac5ff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
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
  background-color: white;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const OtherMessageContent = styled.div`
  position: relative;
  height: 45px;
  padding: 15px;
  background: pink;
  color: white;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  left: 20px;
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

const PublicChatUser = styled.div`
  overflow: hidden;
  font-size: 1px;
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #d9a7e2;
  color: white;
  font-weight: bold;
  border: 0;
`;

const PublicChatRoom = () => {
  const { userId } = useSelector((state) => state.user);
  const { publicChatLog } = useSelector((state) => state.socket);
  return (
    <RoomContainer
      styles={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '80vh',
        width: '50vw',
        bgColor: 'white',
        margin: '25px',
        flexGrow: '1',
        border: '10px solid #e8f7ff',
        borderRadius: '15px',
        padding: '5px',
      }}
    >
      <PublicHeader />
      <ChatContainer>
        {publicChatLog.map((log, idx) => {
          const fromUserId = log.from.userId;
          const fromUserName = log.from.userName;
          const msg = log.message;
          if (fromUserId === userId) {
            return (
              <MyMessageBox key={`${fromUserId}_${idx}`}>
                <MyMessageContent>{msg}</MyMessageContent>
              </MyMessageBox>
            );
          } else {
            return (
              <OtherMessageBox key={`${fromUserId}_${idx}`}>
                <PublicChatUser>{fromUserName}</PublicChatUser>
                <OtherMessageContent>{msg}</OtherMessageContent>
              </OtherMessageBox>
            );
          }
        })}
      </ChatContainer>

      <ChatInput />
    </RoomContainer>
  );
};

export default PublicChatRoom;
