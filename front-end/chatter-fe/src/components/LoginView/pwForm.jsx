import React from 'react';
import styled from 'styled-components';

const PwForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 10%;
  margin-bottom: 2%;
`;

const PwLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 30%;
`;

const PwBox = styled.input.attrs({
  placeholder: 'password를 입력해 주세요.',
  type: 'password',
})`
  height: 70%;
  width: 50%;
  border: 1px solid #3fb5d3;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const pwForm = ({ ...props }) => {
  return (
    <PwForm>
      <PwLabel>{props.label}</PwLabel>
      <PwBox onChange={props.onChange}></PwBox>
    </PwForm>
  );
};

export default pwForm;
