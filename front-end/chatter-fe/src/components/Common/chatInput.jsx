import React, { useState } from 'react';
import styled from 'styled-components';
import InputContainer from './container';
import * as type from '../../actions/type';
import { Send } from '@styled-icons/feather/Send';
import { useDispatch, useSelector } from 'react-redux';

const Chat = styled.input`
  width: 100%;
  height: 30px;
`;

const SendIcon = styled(Send)`
  width: 30px;
  color: lightblue;
`;

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const { userId, userName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const sendHandler = () => {
    dispatch({ type: type.SEND_TO_ALL_MSG, payload: { message, from: { userId, userName } } });
  };

  const messageHandler = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const messageKeyHandler = (e) => {
    if (e.code === 'Enter') {
      setMessage(e.target.value);
      dispatch({ type: type.SEND_TO_ALL_MSG, payload: { message, from: { userId, userName } } });
    }
  };

  return (
    <InputContainer styles={{ width: '100%', height: 'auto' }}>
      <Chat value={message} onKeyPress={messageKeyHandler} onChange={messageHandler} />
      <SendIcon onClick={() => sendHandler()} />
    </InputContainer>
  );
};

export default ChatInput;
