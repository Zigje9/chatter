import React, { useState } from 'react';
import styled from 'styled-components';
import InputContainer from './container';
import { Send } from '@styled-icons/feather/Send';
import { useDispatch } from 'react-redux';
import { sendPrivateMsg } from '../../actions/socket';

const Chat = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #e8f7ff;
  border-radius: 15px;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
`;

const SendIcon = styled(Send)`
  width: 30px;
  color: lightblue;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const PrivateChatInput = ({ ...props }) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { from, roomName } = props.roomInfo;

  const sendHandler = () => {
    dispatch(sendPrivateMsg({ from, roomName, msg: message }));
  };

  const messageHandler = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const messageKeyHandler = (e) => {
    if (e.code === 'Enter') {
      setMessage(e.target.value);
      dispatch(sendPrivateMsg({ from, roomName, msg: message }));
    }
  };

  return (
    <InputContainer styles={{ position: 'absolute', width: '100%', height: 'auto', bottom: '5px' }}>
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

export default PrivateChatInput;
