import React from 'react';
import styled from 'styled-components';
import Container from '../Common/container';
import SelfInfo from '../UserList/selfInfo';
import UserCard from './userCard';
import { useSelector } from 'react-redux';

const UserList = () => {
  const members = useSelector((state) => state.userList.members);
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
          />
        );
      })}
    </Container>
  );
};

export default UserList;
