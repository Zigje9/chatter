import React from 'react';
import Container from '../components/Common/container';
import IdForm from '../components/LoginView/idForm';

const loginView = () => {
  return (
    <Container>
      <IdForm label="ID" />
    </Container>
  );
};
export default loginView;
