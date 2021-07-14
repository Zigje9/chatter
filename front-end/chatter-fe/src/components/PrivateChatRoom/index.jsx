import React, { useState } from 'react';
import styled from 'styled-components';
import PrivateProfile from './privateProfile';
import PrivateName from './privateName';
import PrivateChat from './privateChat';
import { useSelector, useDispatch } from 'react-redux';
import { sendPrivateMsg } from '../../actions/socket';
import { getPartner, getPartnerInfo } from '../../utils/getPartner';
import { ChatDots } from '@styled-icons/bootstrap/ChatDots';

const PrivateBox = styled.div`
  height: 150px;
  width: 200px;
  margin-top: 10%;
  background-color: white;
  border-radius: 20px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`;

const ChatIcon = styled(ChatDots)`
  width: 30px;
  color: purple;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
    fill: red;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
`;

const PrivateChatRoom = (props) => {
  const dispatch = useDispatch();
  const { roomName, from } = props;
  const { userId } = useSelector((state) => state.user);
  const { members } = useSelector((state) => state.userList);
  const partnerId = getPartner(roomName, userId);
  const partner = getPartnerInfo(members, partnerId);

  const privateMsgHandler = () => {
    dispatch(sendPrivateMsg({ from, roomName, msg: 'TEST' }));
  };

  const [modal, setModal] = useState(false);

  return (
    <>
      <PrivateBox onClick={() => privateMsgHandler()}>
        <PrivateProfile userProfile={partner.userProfile}></PrivateProfile>
        <PrivateName userName={partner.userName}></PrivateName>
        <ChatIcon onClick={() => setModal(true)}></ChatIcon>
      </PrivateBox>
      {modal && (
        <ModalContainer>
          <PrivateChat></PrivateChat>
        </ModalContainer>
      )}
    </>
  );
};

export default PrivateChatRoom;
