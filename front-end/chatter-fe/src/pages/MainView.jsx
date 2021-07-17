import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/Common/container';
import UserList from '../components/UserList/userList';
import PublicChatRoom from '../components/PublicChatRoom';
import 'dotenv/config';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserRequest } from '../actions/userList';
import {
  connectSocketInitRequest,
  publicChatLogOriginRequest,
  privateRoomOriginRequest,
  privateChatLogOriginRequest,
} from '../actions/socket';
import PrivateChatRoom from '../components/PrivateChatRoom';

const PrivateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  align-items: center;
  background-color: #e8f7ff;
  overflow-y: scroll;
`;

const MainView = () => {
  const dispatch = useDispatch();
  const { userId, userName, userProfile } = useSelector((state) => state.user);
  const { rooms } = useSelector((state) => state.socket);

  const getUserList = () => {
    try {
      dispatch(getAllUserRequest());
    } catch (error) {
      console.log(error);
    }
  };

  const createSocket = () => {
    try {
      dispatch(connectSocketInitRequest({ userId, userName, userProfile }));
    } catch (error) {
      console.log(error);
    }
  };

  const getPublicChatLogOrigin = () => {
    try {
      dispatch(publicChatLogOriginRequest());
    } catch (error) {
      console.log(error);
    }
  };

  const getPrivateChatLogOrigin = () => {
    try {
      dispatch(privateChatLogOriginRequest());
    } catch (error) {
      console.log(error);
    }
  };

  const getPrivateRoomOrigin = () => {
    try {
      dispatch(privateRoomOriginRequest());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    createSocket();
    getUserList();
    getPublicChatLogOrigin();
    getPrivateRoomOrigin();
    getPrivateChatLogOrigin();
  }, []);

  return (
    <>
      <Container styles={{ alignItems: 'flex-start' }}>
        <UserList />
        <PublicChatRoom />
        <PrivateContainer>
          {rooms.map((room) => (
            <PrivateChatRoom key={room} roomName={room} from={{ userName, userId }} />
          ))}
        </PrivateContainer>
      </Container>
    </>
  );
};

export default MainView;
