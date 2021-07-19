import React from 'react';
import styled from 'styled-components';
import SelfMsgContent from './selfMsgContent';
import DateBox from '../Common/date';

const Box = styled.div`
  background-color: #e8f6ff;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SelfMsgBox = ({ ...props }) => {
  return (
    <Box>
      <DateBox right={true} date={props.date}></DateBox>
      <SelfMsgContent>{props.msg}</SelfMsgContent>
    </Box>
  );
};

export default SelfMsgBox;
