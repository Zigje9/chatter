import React, { useState } from 'react';
import Container from '../components/Common/container';
import IdForm from '../components/LoginView/idForm';
import PwForm from '../components/LoginView/pwForm';
import LoginButton from '../components/LoginView/loginButton';
import ErrorMsg from '../utils/errorMsg';

const LoginView = () => {
  const [id, setId] = useState('');
  const [error, setError] = useState(false);

  const idHandler = (e) => {
    setId(e.target.value);
    e.target.value.length > 8 ? setError(true) : setError(false);
    console.log(id);
  };

  return (
    <Container flexDirection="column">
      <IdForm
        onChange={idHandler}
        error={error}
        label={error ? `${ErrorMsg.idLengthError}` : 'ID'}
      />
      <PwForm label="Password" />
      <LoginButton></LoginButton>
    </Container>
  );
};
export default LoginView;
