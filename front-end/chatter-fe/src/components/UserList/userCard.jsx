import React from 'react';
import styled from 'styled-components';
import CardListContainer from '../Common/container';
import { LightbulbFill } from '@styled-icons/bootstrap';
import { LightbulbOff } from '@styled-icons/bootstrap/LightbulbOff';

const Card = styled.div`
  display: flex;
`;

const OnlineIcon = styled(LightbulbFill)`
  color: yellow;
  width: 40px;
`;
const OfflineIcon = styled(LightbulbOff)`
  color: gray;
  width: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const UserCard = ({ userName, isLogin }) => {
  return (
    <CardListContainer
      styles={{
        display: 'block',
        bgColor: 'green',
        width: '80%',
        height: '100px',
        margin: '10px auto 0 auto',
      }}
    >
      <CardContainer>
        <Card>{userName}</Card>
        {isLogin ? <OnlineIcon /> : <OfflineIcon />}
      </CardContainer>
    </CardListContainer>
  );
};

export default UserCard;
