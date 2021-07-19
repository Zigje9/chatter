import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import RoomContainer from '../Common/container';
import ChatInput from '../Common/chatInput';
import PublicHeader from './header';
import DateBox from '../Common/date';
import { useSelector } from 'react-redux';
import { getProfile, getProfileIdx } from '../../utils/getProfile';
import getProfileColor from '../../assets/getProfileColor';

const ChatContainer = styled.div`
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

const MyMessageBox = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MyMessageContent = styled.div`
  position: relative;
  color: white;
  height: 40px;
  padding: 13px;
  font-size: 13px;
  background: #4286f5;
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
    border-color: transparent #4286f5;
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
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const OtherMessageContent = styled.div`
  position: relative;
  height: 40px;
  padding: 13px;
  font-size: 13px;
  background-color: ${(props) => props.userColor};
  color: white;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  left: 5px;
  margin: 3px 0;
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 5px 10px 5px 0;
    border-color: transparent ${(props) => props.userColor};
    display: block;
    width: 0;
    z-index: 1;
    left: -10px;
    top: 16px;
  }
`;

const PublicChatUser = styled.div`
  font-size: 1px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PublicUserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

const PublicChatRoom = () => {
  const { userId } = useSelector((state) => state.user);
  const { members } = useSelector((state) => state.userList);
  const { publicChatLog } = useSelector((state) => state.socket);
  const scrollRef = useRef();

  const scrollToBottom = () => {
    const { scrollHeight, clientHeight } = scrollRef.current;
    scrollRef.current.scrollTop = scrollHeight - clientHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [publicChatLog]);
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
      <ChatContainer ref={scrollRef}>
        {publicChatLog.map((log, idx) => {
          const fromUserId = log.from.userId;
          const fromUserName = log.from.userName;
          const msg = log.message;
          const date = log.date;
          if (fromUserId === userId) {
            return (
              <MyMessageBox key={`${fromUserId}_${idx}`}>
                <DateBox right={true} date={date}></DateBox>
                <MyMessageContent>{msg}</MyMessageContent>
              </MyMessageBox>
            );
          } else {
            const userIdx = getProfileIdx(members, fromUserId);
            return (
              <OtherMessageBox key={`${fromUserId}_${idx}`}>
                <PublicChatUser>
                  <PublicUserImage src={getProfile(userIdx)}></PublicUserImage>
                  {fromUserName}
                </PublicChatUser>
                <OtherMessageContent userColor={getProfileColor(userIdx)}>
                  {msg}
                </OtherMessageContent>
                <DateBox date={date}></DateBox>
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
