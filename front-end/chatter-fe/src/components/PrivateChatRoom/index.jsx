import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PrivateProfile from './privateProfile';
import PrivateName from './privateName';
import PrivateChat from './privateChat';
import { useSelector } from 'react-redux';
import { getPartner, getPartnerInfo } from '../../utils/getPartner';
import { DoorOpenFill } from '@styled-icons/bootstrap/DoorOpenFill';
import { InfoCircle } from '@styled-icons/boxicons-regular/InfoCircle';
import alertInfo from '../../utils/info';
const PrivateBox = styled.div`
  height: 150px;
  width: 200px;
  margin-top: 10%;
  background-color: white;
  border-radius: 5px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  box-shadow: 3px 3px 2px #e7ebf1;
  flex-direction: column;
  justify-content: center;
  &:hover {
    background-color: #fcbb7e;
  }
`;

const PrivateHeader = styled.div`
  height: 18%;
  width: 95%;
  background-color: #e8f7ff;
  display: flex;
`;

const PrivateHeaderTitle = styled.span`
  align-items: center;
  width: 80%;
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 15px;
  font-weight: 300;
  font-family: serif;
  color: darkslateblue;
`;

const PrivateHeaderIcon = styled(InfoCircle)`
  width: 20px;
  color: darkslateblue;
  cursor: pointer;
`;

const PrivateItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 75%;
  width: 95%;
`;

const fade = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const ChatIcon = styled(DoorOpenFill)`
  width: 30px;
  color: royalblue;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    animation: ${fade} 1s linear infinite;
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
  const { roomName, from } = props;
  const { userId } = useSelector((state) => state.user);
  const { members } = useSelector((state) => state.userList);
  const partnerId = getPartner(roomName, userId);
  const partner = getPartnerInfo(members, partnerId);

  const [modal, setModal] = useState(false);

  const closeModalHandler = () => {
    setModal(false);
  };

  return (
    <>
      <PrivateBox>
        <PrivateHeader>
          <PrivateHeaderTitle>Private Room</PrivateHeaderTitle>
          <PrivateHeaderIcon onClick={() => alertInfo(partner)}></PrivateHeaderIcon>
        </PrivateHeader>
        <PrivateItem>
          <PrivateProfile userProfile={partner.userProfile}></PrivateProfile>
          <PrivateName userName={partner.userName}></PrivateName>
          <ChatIcon onClick={() => setModal(true)}></ChatIcon>
        </PrivateItem>
      </PrivateBox>
      {modal && (
        <ModalContainer>
          <PrivateChat
            roomInfo={{ from, partner, roomName }}
            modalClose={closeModalHandler}
          ></PrivateChat>
        </ModalContainer>
      )}
    </>
  );
};

export default PrivateChatRoom;
