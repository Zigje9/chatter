import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/Common/container';
import UserList from '../components/UserList/userList';
import PublicChatRoom from '../components/PublicChatRoom';
import 'dotenv/config';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserRequest } from '../actions/userList';
import { connectSocketInitRequest, publicChatLogOriginRequest } from '../actions/socket';
import PrivateChatRoom from '../components/PrivateChatRoom';

/* 
TODO
- userName + 회원 리스트 띄울 스크롤바 UI
- 회원 리스트 받아오는 API (가입된 회원들)
- 회원 리스트 + 현재 접속자 Redux state [{name:"abc", nowLogin:true}, ... ]
- 소켓으로 들어와있는 사람들 브로드캐스팅 알림 
- 채팅 Room UI
*/

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
  const { userId, userName } = useSelector((state) => state.user);
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
      dispatch(connectSocketInitRequest({ userId, userName }));
    } catch (error) {
      console.log(error);
    }
  };

  const getPublicChatLogOrigin = async () => {
    try {
      dispatch(publicChatLogOriginRequest());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserList();
    createSocket();
    getPublicChatLogOrigin();
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
