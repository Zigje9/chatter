import React from 'react';
import styled from 'styled-components';

const StyledSubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 1px solid #afe4d4;
  box-shadow: none;
  border-radius: 3px;
  padding: 0;
  margin-top: 2%;
  overflow: visible;
  cursor: pointer;
  &:hover {
    background-color: #afe4d4;
    color: #fff;
    border: none;
  }
`;

StyledSubmitButton.defaultProps = {
  bgColor: "#4285F4",
  color: "#ffffff"
}

const SubmitButton = ({children, styles}) => {
  return (
    <StyledSubmitButton type="submit" {...styles}>
    {children}
  </StyledSubmitButton>
  );
};

export default SubmitButton;
