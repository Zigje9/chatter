import React, { useEffect } from 'react';
import Container from '../components/Common/container';
import { useSelector } from 'react-redux';
import { getAxios } from '../utils/axios';

/* 
TODO
- userName + 회원 리스트 띄울 스크롤바 UI
- 회원 리스트 받아오는 API (가입된 회원들)
- 회원 리스트 + 현재 접속자 Redux state [{name:"abc", nowLogin:true}, ... ]
- 소켓으로 들어와있는 사람들 브로드캐스팅 알림 
- 채팅 Room UI
*/

const MainView = () => {
  const userName = useSelector((state) => state.user.userName);

  const userList = {};

  const getUserList = async () => {
    try {
      const res = await getAxios('members/');
      console.log('res', res);
      console.log('data', res.data);
      console.log('members', res.data.members);
      res.data.members.map((e) => (userList[e.userName] = e.userId));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Container flexDirection="row">
      <div>메인 페이지</div>
      <h2>{userName}</h2>
      <h3>{userList}</h3>
    </Container>
  );
};

export default MainView;
