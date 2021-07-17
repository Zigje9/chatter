import * as type from '../actions/type';

const initialState = {
  socket: null,
  publicChatLog: [],
  rooms: [],
  privateChatLog: [],
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
    case type.PUBLIC_CHAT_LOG_ORIGIN:
      return {
        ...state,
        publicChatLog: [...state.publicChatLog, ...action.payload],
      };
    case type.ADD_PRIVATE_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, action.payload],
      };
    case type.PRIVATE_ROOM_ORIGIN:
      return {
        ...state,
        rooms: [...state.rooms, ...action.payload],
      };
    case type.ADD_PRIVATE_MSG:
      return {
        ...state,
        privateChatLog: [...state.privateChatLog, action.payload],
      };
    case type.PRIVATE_CHAT_LOG_ORIGIN:
      return {
        ...state,
        publicChatLog: [...state.publicChatLog, ...action.payload],
      };
    default:
      return state;
  }
};

export default socket;
