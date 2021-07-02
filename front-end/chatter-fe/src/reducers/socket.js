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
    case 'RECEIVE_MSG':
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default socket;
