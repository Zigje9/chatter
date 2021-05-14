import React from 'react';
import styled from 'styled-components';

const LoginButton = styled.button`
  width: 15%;
  height: 8%;
  color: #afe4d4;
  border: 1px solid #afe4d4;
  box-shadow: none;
  border-radius: 7px;
  padding: 0;
  margin-right: 35%;
  margin-top: 2%;
  overflow: visible;
  cursor: pointer;
  background-color: #fff;
  &:hover {
    background-color: #afe4d4;
    color: #fff;
    border: none;
  }
`;

const loginButton = ({ ...props }) => {
  return <LoginButton onClick={props.onClick}>Login</LoginButton>;
};

export default loginButton;
