import * as type from "./type";

export const connectSocketInitRequest = (userInfo) => {
  return {
    type: type.CONNECT_SOCKET_INIT_REQUEST,
    payload: userInfo,
  };
};

export const connectSocketInitSuccess = (socket) => {
  return {
    type: type.CONNECT_SOCKET_INIT_SUCCESS,
    payload: socket,
  };
};

export const broadcasting = () => {
  return {
    type: type.BROADCASTING,
  };
};

export const publicChatLog = (payload) => {
  return {
    type: type.PUBLIC_CHAT_LOG,
    payload,
  };
};

export const requestCreateRoom = (payload) => {
  return {
    type: type.REQUEST_CREATE_ROOM,
    payload,
  };
};

export const addPrivateRoom = (roomName) => {
  return {
    type: type.ADD_PRIVATE_ROOM,
    payload: roomName,
  };
};
