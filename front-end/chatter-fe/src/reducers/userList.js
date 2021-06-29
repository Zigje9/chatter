import * as type from '../actions/type';

const initialState = { members: new Array() };

const userList = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        members: action.payload,
      };
    case type.CHANGE_ALL_USER_ONLINE:
      const onUsersName = Object.values(action.payload);
      const changeMembers = state.members.map(({ userName, isLogin, ...rest }) => {
        if (onUsersName.includes(userName)) {
          return { userName, isLogin: true, ...rest };
        } else {
          return { userName, isLogin: false, ...rest };
        }
      });
      return {
        members: changeMembers,
      };
    default:
      return state;
  }
};

export default userList;
