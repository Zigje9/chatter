import React from 'react';
import styled from 'styled-components';
import DateBox from '../Common/date';
import SelfMsgContent from './selfMsgContent';

const Box = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
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
