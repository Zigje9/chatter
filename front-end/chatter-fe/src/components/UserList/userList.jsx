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
        bgColor: '#84d9ef',
        width: '300px',
        margin: '0 auto 0 0',
        overflow: 'scroll',
      }}
    >
      <SelfInfo />
      {members.map((info) => {
        return <UserCard key={info.userId} userName={info.userName} isLogin={info.isLogin} />;
      })}
    </Container>
  );
};

export default UserList;
