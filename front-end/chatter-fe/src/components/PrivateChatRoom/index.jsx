import React from "react";
import { useDispatch } from "react-redux";
import { sendPrivateMsg } from "../../actions/socket";

const PrivateChatRoom = (props) => {
  const { roomName, from } = props;
  const dispatch = useDispatch();

  const privateMsgHandler = () => {
    dispatch(sendPrivateMsg({ from, roomName, msg: "TEST" }));
  };

  return <div onClick={() => privateMsgHandler()}>{roomName}</div>;
};

export default PrivateChatRoom;
