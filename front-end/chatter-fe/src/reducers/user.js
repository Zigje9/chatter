import * as type from '../actions/type';

const user = (state = {}, action) => {
  switch (action.type) {
    case type.LOGIN_INIT_SUCCESS:
      return {
        isLogin: action.payload.isLogin,
        userName: action.payload.userName,
        userProfile: action.payload.userProfile,
      };
    case type.LOGIN_SUCCESS:
      return {
        isLogin: true,
        userName: action.payload.userName,
        userProfile: action.payload.userProfile,
      };
    case type.LOGOUT:
      return { isLogin: false, userName: null, userProfile: null };
    default:
      return state;
  }
};

export default user;
