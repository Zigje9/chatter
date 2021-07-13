import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { sendPrivateMsg } from '../../actions/socket';
import { getPartner, getPartnerInfo } from '../../utils/getPartner';

const PrivateBox = styled.div`
  height: 150px;
  width: 200px;
  margin-top: 10%;
  background-color: white;
  border-radius: 20px;
  flex: 0 0 auto;
`;

const PrivateChatRoom = (props) => {
  const dispatch = useDispatch();
  const { roomName, from } = props;
  const { userName } = useSelector((state) => state.user);
  const { members } = useSelector((state) => state.userList);
  const partnerId = getPartner(roomName, userName);
  const partner = getPartnerInfo(members, partnerId);

  const privateMsgHandler = () => {
    dispatch(sendPrivateMsg({ from, roomName, msg: 'TEST' }));
  };

  return <PrivateBox onClick={() => privateMsgHandler()}>{partner.userName}</PrivateBox>;
};

export default PrivateChatRoom;
