import * as type from './type';

export const connectSocketInitRequest = (userName) => {
  return {
    type: type.CONNECT_SOCKET_INIT_REQUEST,
    payload: userName,
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
