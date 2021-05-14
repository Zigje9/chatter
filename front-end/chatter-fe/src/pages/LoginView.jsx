import React from 'react';
import Container from '../components/Common/container';
import IdForm from '../components/LoginView/idForm';
import PwForm from '../components/LoginView/pwForm';

const loginView = () => {
  return (
    <Container flexDirection="column">
      <IdForm label="ID" />
      <PwForm label="Password" />
    </Container>
  );
};
export default loginView;
