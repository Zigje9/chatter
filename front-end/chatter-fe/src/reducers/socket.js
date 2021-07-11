import * as type from "../actions/type";

const initialState = {
  socket: null,
  publicChatLog: [],
};

const socket = (state = initialState, action) => {
  switch (action.type) {
    case type.CONNECT_SOCKET_INIT_SUCCESS:
      return {
        socket: action.payload,
      };
    case type.PUBLIC_CHAT_LOG:
      return {
        ...state,
        publicChatLog: [...state.publicChatLog, action.payload],
      };
    case "RECEIVE_MSG":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default socket;
