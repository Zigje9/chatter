import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import errorMsg from '../utils/errorMsg';
import Container from '../components/Common/container';
import CustomInput from '../components/Common/customInput';
import SubmitButton from '../components/LoginView/submitButton';
import SignUpForm from '../components/LoginView/signUpForm';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../actions/user';

const LoginForm = styled(Form)`
  width: 70%;
`;

const LoginTitle = styled.h2`
  color: #4285f4;
  margin-bottom: 20px;
`;

const LoginView = () => {
  const dispatch = useDispatch();
  const [formHeight, setFormHeight] = useState('400px');

  const submitHandler = (values, { setErrors, setFieldError }) => {
    const { id, pw } = values;
    dispatch(loginRequest({ id, pw }));
  };

  return (
    <Container
      styles={{
        flexDirection: 'column',
        bgColor: '#84d9ef',
      }}
    >
      <Container
        styles={{
          flexDirection: 'column',
          bgColor: '#fefefe',
          width: '40%',
          height: formHeight,
          borderRadius: '10px',
          position: 'relative',
          overflow: 'hidden',
          transition: '0.5s ease',
        }}
      >
        <SignUpForm onChangeHeight={(height) => setFormHeight(height)} />
        <Formik
          initialValues={{ id: '', pw: '' }}
          validationSchema={Yup.object({
            id: Yup.string().max(8, errorMsg.idLengthError).required(errorMsg.idRequired),
            pw: Yup.string().required(errorMsg.passwordRequired),
          })}
          onSubmit={submitHandler}
        >
          <LoginForm>
            <LoginTitle>ACCOUNT LOGIN</LoginTitle>
            <CustomInput name="id" type="text" placeholder="Username" />
            <CustomInput name="pw" type="password" placeholder="Password" />
            <SubmitButton>LOGIN</SubmitButton>
          </LoginForm>
        </Formik>
      </Container>
    </Container>
  );
};

export default LoginView;
