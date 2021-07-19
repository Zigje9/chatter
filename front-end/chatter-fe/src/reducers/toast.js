import * as type from '../actions/type';

const initialState = {
  msgQueue: [],
};

const toast = (state = initialState, action) => {
  switch (action.type) {
    case type.TOAST_ADD_MESSAGE:
      return {
        ...state,
        msgQueue: [...state.msgQueue, action.payload],
      };
    case type.TOAST_DELETE_MESSAGE:
      const deleteQueue = [...state.msgQueue];
      deleteQueue.shift(0);
      return {
        ...state,
        msgQueue: deleteQueue,
      };
    default:
      return state;
  }
};

export default toast;
