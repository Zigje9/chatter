import React from 'react';
import Container from '../Common/container';
import SelfInfo from '../UserList/selfInfo';
import UserCard from './userCard';
import { useSelector, useDispatch } from 'react-redux';

const UserList = () => {
  const userInfo = useSelector((state) => state.user);
  const members = useSelector((state) => state.userList.members);
  const dispatch = useDispatch();

  const handshakeHandler = (receiverId) => {
    const userAccounts = [userInfo.userId, receiverId];
    userAccounts.sort();
    dispatch({ type: 'USER_ACCOUNTS', payload: userAccounts });
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
            onClick={() => handshakeHandler(info.userId)}
          />
        );
      })}
    </Container>
  );
};

export default UserList;
