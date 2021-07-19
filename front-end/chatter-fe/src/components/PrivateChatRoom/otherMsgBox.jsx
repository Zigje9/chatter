import React from 'react';
import styled from 'styled-components';
import OtherMsgContent from './otherMsgContent';
import DateBox from '../Common/date';

const Box = styled.div`
  background-color: #e8f6ff;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const OtherMsgBox = ({ ...props }) => {
  return (
    <Box>
      <OtherMsgContent>{props.msg}</OtherMsgContent>
      <DateBox left={true} date={props.date}></DateBox>
    </Box>
  );
};

export default OtherMsgBox;
