import React from 'react';
import styled from 'styled-components';

const CustomLoginButton = styled.button`
  width: 100%;
  height: 40px;
  color: #ffffff;
  border: 1px solid #afe4d4;
  box-shadow: none;
  border-radius: 3px;
  padding: 0;
  margin-top: 2%;
  overflow: visible;
  cursor: pointer;
  background-color: #4285F4;
  &:hover {
    background-color: #afe4d4;
    color: #fff;
    border: none;
  }
`;

const LoginButton = () => {
  return <CustomLoginButton type="submit">LOG IN</CustomLoginButton>;
};

export default LoginButton;
