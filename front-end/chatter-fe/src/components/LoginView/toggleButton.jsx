import React from 'react';
import styled from 'styled-components';

const StyledToggleButton = styled.button`
  background-color: #ffffff;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 3px;
    margin: 0 auto;
    background-color: #4286f5;
    transform: translate(-50%, -50%);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const ToggleButton = ({ onClose }) => {
  return <StyledToggleButton type="button" onClick={onClose} />;
};

export default ToggleButton;
