import React from 'react';
import styled from 'styled-components';

const IdForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 10%;
  margin-bottom: 2%;
`;

const IdLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 30%;
  ${(props) => props.error && `color: red;`}
`;

const IdBox = styled.input.attrs({
  placeholder: `id를 입력해 주세요.`,
})`
  height: 70%;
  width: 50%;
  border-radius: 5px;
  border: 1px solid #3fb5d3;
  &:hover {
    ${(props) => props.error && `border: 1.5px solid red`}
  }
  &:focus {
    outline: none;
  }
`;

const idForm = ({ ...props }) => {
  return (
    <IdForm>
      <IdLabel error={props.error}>{props.label}</IdLabel>
      <IdBox onChange={props.onChange} error={props.error}></IdBox>
    </IdForm>
  );
};

export default idForm;
