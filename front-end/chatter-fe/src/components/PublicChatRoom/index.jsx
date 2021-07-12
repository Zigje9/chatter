import React from 'react';
import styled from 'styled-components';
import RoomContainer from '../Common/container';
import ChatInput from '../Common/chatInput';

const ChatHeader = styled.div`
  width: 100%;
  height: 30px;
  background-color: yellow;
`;

const MyMessageBox = styled.div`
  background-color: white;
  border-left: 1px solid black;
  border-right: 1px solid black;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: inherit;
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
  border-left: 1px solid black;
  border-right: 1px solid black;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const OtherMessageContent = styled.span`
  position: relative;
  height: 45px;
  padding: 15px;
  background: pink;
  color: white;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  left: 20px;
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
  height: 100%;
  width: 50px;
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
      <MyMessageBox>
        <MyMessageContent>hasdasdashasdasdasdsdsddsdsd</MyMessageContent>
      </MyMessageBox>
      <MyMessageBox>
        <MyMessageContent>asdjba</MyMessageContent>
      </MyMessageBox>
      <OtherMessageBox>
        <PublicChatUser>일론머스크</PublicChatUser>
        <OtherMessageContent>zz</OtherMessageContent>
      </OtherMessageBox>
      <ChatInput />
    </RoomContainer>
  );
};

export default PublicChatRoom;
