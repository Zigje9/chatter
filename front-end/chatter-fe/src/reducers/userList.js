import * as type from '../actions/type';

const initialState = { members: new Array() };

const userList = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        members: action.payload,
      };
    default:
      return state;
  }
};

export default userList;
