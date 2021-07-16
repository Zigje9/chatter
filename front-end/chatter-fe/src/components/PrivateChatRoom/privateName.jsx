import React from 'react';
import styled from 'styled-components';

const Name = styled.div`
  width: 90px;
  height: 50px;
  text-align: center;
  font-weight: bold;
  color: royalblue;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const PrivateName = ({ ...props }) => {
  return <Name>{props.userName}</Name>;
};

export default PrivateName;
