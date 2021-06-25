import * as type from '../actions/type';

const user = (state = {}, action) => {
  switch (action.type) {
    case type.LOGIN_INIT:
      return { isLogin: action.payload.isLogin, userName: action.payload.userName };
    case type.LOGIN_SUCCESS:
      return { isLogin: true, userName: action.payload };
    case type.LOGOUT:
      return { isLogin: false, userName: null };
    default:
      return state;
  }
};

export default user;
