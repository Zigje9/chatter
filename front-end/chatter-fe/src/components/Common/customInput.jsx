import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
  border: ${(props) => (props.isError ? '1px solid red' : 'none')};
  &::placeholder {
    color: inherit;
  }
  &:focus-visible {
    outline: none;
  }
`;

Input.defaultProps = {
  bgColor: '#E5E5E5',
  color: '#000000',
};

const ErrorMessage = styled.div`
  font-size: 15px;
  margin-top: 5px;
  color: red;
`;

const CustomInput = ({ label, styles, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <Input {...field} {...props} {...styles} isError={meta.touched && meta.error} />
      {meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
    </InputContainer>
  );
};

export default CustomInput;
