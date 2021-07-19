import React from 'react';
import styled from 'styled-components';
import ChatUser from './chatUser';
import DateBox from '../Common/date';
import OtherMsgContent from './otherMsgContent';

const Box = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const SelfMsgBox = ({ ...props }) => {
  return (
    <Box>
      <ChatUser userIdx={props.userIdx} fromUserName={props.fromUserName}></ChatUser>
      <OtherMsgContent userIdx={props.userIdx}>{props.msg}</OtherMsgContent>
      <DateBox right={true} date={props.date}></DateBox>
    </Box>
  );
};

export default SelfMsgBox;
