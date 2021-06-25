import React from 'react';
import styled from 'styled-components';
import CardContainer from '../Common/container';

const Card = styled.div`
  display: flex;
  background-color: red;
`;

const UserCard = ({ userName }) => {
  return (
    <CardContainer
      styles={{
        display: 'block',
        // flexDirection: 'column',
        bgColor: 'green',
        width: '80%',
        height: '100px',
        margin: '10px auto 0 auto',
      }}
    >
      <Card>{userName}</Card>
    </CardContainer>
  );
};

export default UserCard;
