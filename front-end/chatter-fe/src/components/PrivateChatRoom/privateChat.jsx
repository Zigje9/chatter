import React from 'react';
import styled from 'styled-components';

const ChatBox = styled.div`
  position: fixed;
  width: 350px;
  height: 480px;
  margin: 0 auto;
  top: 100px;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: white;
`;

const PrivateChat = () => {
  return <ChatBox></ChatBox>;
};

export default PrivateChat;
