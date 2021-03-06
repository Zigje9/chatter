import React from 'react';
import Container from '../Common/container';
import SelfInfo from '../UserList/selfInfo';
import UserCard from './userCard';
import { useSelector, useDispatch } from 'react-redux';
import { requestCreateRoom } from '../../actions/socket';

const UserList = () => {
  const userInfo = useSelector((state) => state.user);
  const members = useSelector((state) => state.userList.members);
  const rooms = useSelector((state) => state.socket.rooms);
  const dispatch = useDispatch();

  const handshakeHandler = (receiverId, receiverName) => {
    if (userInfo.userId === receiverId) {
      alert('자신과 채팅할 수 없습니다.');
      return;
    }
    if (window.confirm(`\n${receiverName}님과 채팅을 시작하시겠습니까?`)) {
      const userAccounts = [userInfo.userId, receiverId];
      userAccounts.sort();
      rooms.some((roomName) => roomName === userAccounts.join('_'))
        ? alert('이미 채팅중입니다.')
        : dispatch(requestCreateRoom(userAccounts));
    } else {
      console.log('NO');
    }
  };

  return (
    <Container
      styles={{
        display: 'block',
        bgColor: '#e8f6ff',
        width: '300px',
        margin: '0 auto 0 0',
        padding: '10px',
        overflow: 'scroll',
      }}
    >
      <SelfInfo />
      {members.map((info) => {
        return (
          <UserCard
            key={info.userId}
            userName={info.userName}
            isLogin={info.isLogin}
            userProfile={info.userProfile}
            onClick={() => handshakeHandler(info.userId, info.userName)}
          />
        );
      })}
    </Container>
  );
};

export default UserList;
