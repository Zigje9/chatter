import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import RoomContainer from '../Common/container';
import ChatInput from '../Common/chatInput';
import PublicHeader from './header';
import SelfMsgBox from './selfMsgBox';
import OtherMsgBox from './otherMsgBox';
import { useSelector } from 'react-redux';
import { getProfileIdx } from '../../utils/getProfile';

const ChatContainer = styled.div`
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
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
            return <SelfMsgBox key={`${fromUserId}_${idx}`} date={date} msg={msg}></SelfMsgBox>;
          } else {
            const userIdx = getProfileIdx(members, fromUserId);
            return (
              <OtherMsgBox
                key={`${fromUserId}_${idx}`}
                userIdx={userIdx}
                fromUserName={fromUserName}
                date={date}
                msg={msg}
              ></OtherMsgBox>
            );
          }
        })}
      </ChatContainer>
      <ChatInput />
    </RoomContainer>
  );
};

export default PublicChatRoom;
