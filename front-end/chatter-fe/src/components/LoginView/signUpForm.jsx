import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { postAxios } from '../../utils/axios';
import styled from 'styled-components';
import errorMsg from '../../utils/errorMsg';
import Container from '../Common/container';
import ToggleButton from './toggleButton';
import HamburgerBar from './hamburgerBar';
import CustomInput from '../Common/customInput';
import SubmitButton from './submitButton';

const left = {
  default: '95%',
  hover: '93%',
  open: '5%',
};

const registerInput = [
  ['name', 'UserName'],
  ['id', 'User ID'],
  ['password', 'Password'],
  ['confirmPassword', 'Confirm Password'],
];

const StyledRegisterForm = styled(Form)`
  width: 80%;
`;

const StyledRegisterTitle = styled.h2`
  color: #ffffff;
  margin-bottom: 20px;
`;

const SignUpForm = ({ onChangeHeight }) => {
  const [curLeft, setLeft] = useState(left.default);

  const handleHoverForm = (e) => {
    const { type } = e;
    if (curLeft === left.open) {
      return;
    }
    if (type === 'mouseenter') {
      setLeft(left.hover);
    } else if (type === 'mouseleave') {
      setLeft(left.default);
    }
  };

  const handleToggleForm = (e) => {
    e.stopPropagation();
    const { currentTarget } = e;
    if (currentTarget.tagName === 'BUTTON') {
      setLeft(left.default);
      onChangeHeight('400px');
    } else if (currentTarget.tagName === 'DIV') {
      setLeft(left.open);
      onChangeHeight(`${currentTarget.scrollHeight}px`);
    }
  };

  const handleRegister = async (values, { setErrors }) => {
    const { name, id, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: errorMsg.passwordNotEqual });
      return;
    }
    const req = {
      userName: name,
      id,
      pw: password,
    };
    try {
      const res = await postAxios('signup', req);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      styles={{
        width: '100%',
        height: '600px',
        bgColor: '#4286f5',
        position: 'absolute',
        top: '0px',
        left: curLeft,
        transition: '0.5s ease',
        padding: '5% 10% 10% 5%',
      }}
      onOver={handleHoverForm}
      onLeave={handleHoverForm}
      onOpen={handleToggleForm}
    >
      {curLeft === left.default && <HamburgerBar vertical={true} top="3%" left="1%" />}
      <Formik
        initialValues={{
          name: '',
          id: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required(errorMsg.nameRequired),
          id: Yup.string().max(8, errorMsg.idLengthError).required(errorMsg.idRequired),
          password: Yup.string().required(errorMsg.passwordRequired),
          confirmPassword: Yup.string().required(errorMsg.passwordRequired),
        })}
        onSubmit={handleRegister}
      >
        <StyledRegisterForm>
          <Container width="100%" height="auto" justifyContent="space-between">
            <StyledRegisterTitle>REGISTER ACCOUNT</StyledRegisterTitle>
            <ToggleButton onClose={handleToggleForm} />
          </Container>
          {registerInput.map(([name, placeholder]) => (
            <CustomInput
              key={name}
              styles={{
                bgColor: '#3b76da',
                color: '#ffffff',
              }}
              name={name}
              type={name.toLowerCase().includes('password') ? 'password' : 'text'}
              placeholder={placeholder}
            />
          ))}
          <SubmitButton
            styles={{
              bgColor: '#ffffff',
              color: '#3b76da',
            }}
          >
            REGISTER
          </SubmitButton>
        </StyledRegisterForm>
      </Formik>
    </Container>
  );
};

export default SignUpForm;
