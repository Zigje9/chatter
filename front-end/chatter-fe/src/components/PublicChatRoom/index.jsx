import React from 'react';
import styled from 'styled-components';
import RoomContainer from '../Common/container';
import ChatInput from '../Common/chatInput';

const ChatHeader = styled.div`
  width: 100%;
  height: 30px;
  background-color: yellow;
`;

const PublicChatRoom = () => {
  return (
    <RoomContainer
      styles={{
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '80vh',
        width: '50vw',
        bgColor: 'green',
        margin: '25px',
        flexGrow: '1',
      }}
    >
      <ChatHeader />
      <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }}></div>
      <ChatInput />
    </RoomContainer>
  );
};

export default PublicChatRoom;
