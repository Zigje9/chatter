import React, { useState } from 'react';
import styled from 'styled-components';
import InputContainer from './container';
import { Send } from '@styled-icons/feather/Send';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();

  const sendHandler = () => {
    dispatch({ type: 'SENDMESSAGE', payload: message });
  };

  const messageHandler = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  return (
    <InputContainer styles={{ width: '100%', height: 'auto' }}>
      <Chat value={message} onChange={messageHandler} />
      <SendIcon onClick={() => sendHandler()} />
    </InputContainer>
  );
};

export default ChatInput;
