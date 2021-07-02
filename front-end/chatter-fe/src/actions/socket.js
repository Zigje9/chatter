import * as type from './type';

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
