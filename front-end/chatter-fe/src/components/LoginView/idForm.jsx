import React from 'react';
import styled from 'styled-components';

const IdForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 10%;
  border: 1px solid green;
`;

const IdLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 30%;
`;

const IdBox = styled.input.attrs({
  placeholder: 'id를 입력해 주세요.',
})`
  height: 70%;
  width: 50%;
  border: 1px solid #3fb5d3;
  border-radius: 5px;
`;

const idForm = ({ label }) => {
  return (
    <IdForm>
      <IdLabel>{label}</IdLabel>
      <IdBox></IdBox>
    </IdForm>
  );
};

export default idForm;
