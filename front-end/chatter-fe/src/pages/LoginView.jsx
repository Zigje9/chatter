import React, { useState } from 'react';
import {Formik, Form} from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import Container from '../components/Common/container';
import CustomInput from "../components/Common/customInput";
import { postAxios } from '../utils/axios';
import LoginButton from "../components/LoginView/loginButton";


const LoginForm = styled(Form)`
  width: 70%;
`

const LoginTitle = styled.h2`
  color: #4285F4;
  margin-bottom: 20px;
`

const LoginView = () => {

  const submitHandler = async (values, {setErrors, setFieldError}) => {
    const {id, pw} = values
    const req = {
      id,
      pw,
    };
    try {
      const res = await postAxios('login/', req);
      console.log(res.data);
    } catch (error) {
      setFieldError("id", "Hello")
    }
  };

  return (
    <Container flexDirection="column" bgColor="#84D9EF">
      <Container flexDirection="column" bgColor="#fefefe" width="40%" height="400px">
        <Formik
            initialValues={{id: "", pw: ""}}
            validationSchema={Yup.object({
              id: Yup.string()
                  .max(8, "형식이 올바르지 않습니다.")
                  .required("ID를 입력해 주세요."),
              pw: Yup.string()
                  .required("Password를 입력해 주세요.")
            })}
            onSubmit={submitHandler}
        >
          <LoginForm>
            <LoginTitle>ACCOUNT LOGIN</LoginTitle>
            <CustomInput
              name="id"
              type="text"
              placeholder="Username"
            />
            <CustomInput
              name="pw"
              type="password"
              placeholder="Password"
            />
            <LoginButton/>
          </LoginForm>
        </Formik>
      </Container>
    </Container>
  );
};

export default LoginView;
