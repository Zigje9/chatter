import React, { useEffect, useState } from 'react';
import Container from '../components/Common/container';
import UserList from '../components/UserList/userList';
import 'dotenv/config';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserRequest } from '../actions/userList';
import { connectSocketInitRequest } from '../actions/socket';

/* 
TODO
- userName + 회원 리스트 띄울 스크롤바 UI
- 회원 리스트 받아오는 API (가입된 회원들)
- 회원 리스트 + 현재 접속자 Redux state [{name:"abc", nowLogin:true}, ... ]
- 소켓으로 들어와있는 사람들 브로드캐스팅 알림 
- 채팅 Room UI
*/

const MainView = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const socket = useSelector((state) => state.socket.socket);

  const getUserList = () => {
    try {
      dispatch(getAllUserRequest());
    } catch (error) {
      console.log(error);
    }
  };

  const createSocket = () => {
    try {
      dispatch(connectSocketInitRequest(userName));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserList();
    createSocket();
  }, []);

  if (socket !== null) {
    socket.on('connect', () => {
      console.log('connect');
    });
    socket.on('broadCasting', (users) => {
      console.log(users);
    });
    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
  }

  return (
    <Container flexDirection="row">
      <UserList />
    </Container>
  );
};

export default MainView;
