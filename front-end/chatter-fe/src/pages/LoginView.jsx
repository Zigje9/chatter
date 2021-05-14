import React, { useState } from 'react';
import Container from '../components/Common/container';
import IdForm from '../components/LoginView/idForm';
import PwForm from '../components/LoginView/pwForm';
import LoginButton from '../components/LoginView/loginButton';
import ErrorMsg from '../utils/errorMsg';

const LoginView = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState(false);

  const idHandler = (e) => {
    setId(e.target.value);
    e.target.value.length > 8 ? setError(true) : setError(false);
  };

  const pwHandler = (e) => {
    setPw(e.target.value);
  };

  const submitHandler = () => {
    console.log(`${id}, ${pw}, here`);
    // if (id.length === 0 || pw.length === 0) {
    //   alert('아이디 또는 비밀번호를 입력해 주세요');
    // } else {
    //   const req = {
    //     id: id,
    //     pw: pw,
    //   };
    //   const res = await postAxios('login/', req);
    //   if (res.data) {
    //     alert(res.data);
    //   }
    // }
  };

  return (
    <Container flexDirection="column">
      <IdForm
        onChange={idHandler}
        error={error}
        label={error ? `${ErrorMsg.idLengthError}` : 'ID'}
      />
      <PwForm label="Password" onChange={pwHandler} />
      <LoginButton onClick={submitHandler}></LoginButton>
    </Container>
  );
};
export default LoginView;
