import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { sendPrivateMsg } from '../../actions/socket';

const PrivateBox = styled.div`
  height: 150px;
  width: 80%;
  margin-top: 10%;
  background-color: white;
  border-radius: 20px;
`;

const PrivateChatRoom = (props) => {
  const { roomName, from } = props;
  const dispatch = useDispatch();

  const privateMsgHandler = () => {
    dispatch(sendPrivateMsg({ from, roomName, msg: 'TEST' }));
  };

  return <PrivateBox onClick={() => privateMsgHandler()}>{roomName}</PrivateBox>;
};

export default PrivateChatRoom;
