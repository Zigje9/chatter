import React from 'react';
import styled from 'styled-components';

const IdForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 10%;
`;

const IdInfo = styled.div`
  display: flex;
  align-items: center;
  height: 20%;
  margin-bottom: 3%;
`;

const IdBox = styled.input`
  height: 100%;
  width: 50%;
`;

const idForm = () => {
  return (
    <IdForm>
      <IdInfo>ID</IdInfo>
      <IdBox></IdBox>
    </IdForm>
  );
};

export default idForm;
