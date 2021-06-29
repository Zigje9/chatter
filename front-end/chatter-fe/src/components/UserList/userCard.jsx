import React from 'react';
import styled from 'styled-components';
import CardListContainer from '../Common/container';
import { LightbulbFill } from '@styled-icons/bootstrap';
import { LightbulbOff } from '@styled-icons/bootstrap/LightbulbOff';
import getProfile from '../../utils/getProfile';

const OnlineIcon = styled(LightbulbFill)`
  color: springgreen;
  width: 20px;
`;
const OfflineIcon = styled(LightbulbOff)`
  color: gray;
  width: 20px;
`;

const CardProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 15px;
`;

const CardInfo = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardName = styled.span`
  color: #32415a;
  font-weight: bold;
`;

const UserCard = ({ userName, isLogin, userProfile }) => {
  return (
    <CardListContainer
      styles={{
        bgColor: '#ffffff',
        width: '100%',
        height: '100px',
        padding: '15px',
        margin: '10px auto 0 auto',
        borderRadius: '5px',
        boxShadow: '3px 3px 2px #e7ebf1;',
        isHover: true,
      }}
    >
      <CardProfile src={getProfile(userProfile)} />
      <CardInfo>
        <CardName>{userName}</CardName>
        {isLogin ? <OnlineIcon /> : <OfflineIcon />}
      </CardInfo>
    </CardListContainer>
  );
};

export default UserCard;
