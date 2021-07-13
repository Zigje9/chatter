import React, { useState } from 'react';
import styled from 'styled-components';
import InputContainer from './container';
import * as type from '../../actions/type';
import { Send } from '@styled-icons/feather/Send';
import { useDispatch, useSelector } from 'react-redux';

const Chat = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #e8f7ff;
  border-radius: 15px;
  &:focus {
    outline: none;
  }
`;

const SendIcon = styled(Send)`
  width: 30px;
  color: lightblue;
  &:hover {
    transform: scale(1.3);
    cursor: pointer;
    fill: lightblue;
  }
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
      <Chat
        placeholder=" 메시지를 입력하세요."
        value={message}
        onKeyPress={messageKeyHandler}
        onChange={messageHandler}
      />
      <SendIcon onClick={() => sendHandler()} />
    </InputContainer>
  );
};

export default ChatInput;
