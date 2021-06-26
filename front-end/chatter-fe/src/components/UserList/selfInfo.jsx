import React from 'react';
import styled from 'styled-components';
import SelfCardContainer from '../Common/container';
import { useSelector } from 'react-redux';
import getProfile from '../../utils/getProfile';

const SelfProfile = styled.img`
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;

const SelfCard = styled.div`
  color: #32415a;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

const SelfInfo = () => {
  const userInfo = useSelector((state) => state.user);
  const { userName, userProfile } = userInfo;
  return (
    <SelfCardContainer
      styles={{
        flexDirection: 'column',
        width: '80%',
        height: '150px',
        margin: '0 auto 0 auto',
      }}
    >
      <SelfProfile src={getProfile(userProfile)} />
      <SelfCard>{userName}</SelfCard>
    </SelfCardContainer>
  );
};

export default SelfInfo;
