import * as type from '../actions/type';

const initialState = {
  socket: null,
};

const socket = (state = initialState, action) => {
  switch (action.type) {
    case type.CONNECT_SOCKET_INIT_SUCCESS:
      return {
        socket: action.payload,
      };
    default:
      return state;
  }
};

export default socket;
