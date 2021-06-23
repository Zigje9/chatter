import React from 'react';
import styled from 'styled-components';
import Container from '../Common/container';
import SelfInfo from '../UserList/selfInfo';

const UserList = () => {
  return (
    <Container
      styles={{
        flexDirection: 'column',
        bgColor: '#84d9ef',
      }}
    >
      <SelfInfo></SelfInfo>
    </Container>
  );
};

export default UserList;
