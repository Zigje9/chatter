import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SelfCard = styled.div`
  width: 80%;
  height: 100px;
  background-color: red;
  margin: auto;
  margin-top: 10px;
`;

const SelfInfo = () => {
  const userName = useSelector((state) => state.user.userName);
  return <SelfCard>{userName}</SelfCard>;
};

export default SelfInfo;
