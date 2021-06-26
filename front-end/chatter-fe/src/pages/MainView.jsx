import React, { useEffect } from 'react';
import Container from '../components/Common/container';
import UserList from '../components/UserList/userList';
import { useDispatch } from 'react-redux';
import { getAllUserRequest } from '../actions/userList';

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
  const getUserList = () => {
    try {
      dispatch(getAllUserRequest());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Container flexDirection="row">
      <UserList />
    </Container>
  );
};

export default MainView;
