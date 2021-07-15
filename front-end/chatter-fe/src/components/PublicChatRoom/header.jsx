import React from 'react';
import styled from 'styled-components';
import { PeopleAudience } from '@styled-icons/fluentui-system-regular/PeopleAudience';
import { useSelector } from 'react-redux';
import getNowConnectedUser from '../../utils/getNowConnectedUser';

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: #e8f7ff;
  display: flex;
`;

const Title = styled.span`
  align-items: center;
  width: 40%;
  text-align: center;
  height: 100%;
  margin-left: 5%;
  display: flex;
  justify-content: center;
  font-size: large;
  font-weight: 400;
  font-family: serif;
  color: darkslateblue;
`;

const PeopleConatiner = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const PeopleIcon = styled(PeopleAudience)`
  width: 30px;
  height: 100%;
  color: darkslateblue;
`;

const ConnectNumber = styled.span`
  color: red;
  font-size: small;
  font-weight: 400;
  font-family: monospace;
`;

const ConnectSpan = styled.span`
  font-size: small;
  font-weight: 400;
  font-family: monospace;
`;

const PublicHeader = () => {
  const { members } = useSelector((state) => state.userList);
  return (
    <Header>
      <Title>Public Room</Title>
      <PeopleConatiner>
        <PeopleIcon></PeopleIcon>
        <ConnectNumber>{getNowConnectedUser(members)}</ConnectNumber>
        <ConnectSpan>명 접속중</ConnectSpan>
      </PeopleConatiner>
    </Header>
  );
};

export default PublicHeader;
