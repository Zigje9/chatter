import React from 'react';
import styled from 'styled-components';
import { getProfile } from '../../utils/getProfile';

const PublicChatUser = styled.div`
  font-size: 1px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PublicUserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

const ChatUser = ({ ...props }) => {
  return (
    <PublicChatUser>
      <PublicUserImage src={getProfile(props.userIdx)}></PublicUserImage>
      {props.fromUserName}
    </PublicChatUser>
  );
};

export default ChatUser;
