import * as type from './type';

export const login = (userName = null) => {
  return {
    type: type.LOGIN,
    payload: userName,
  };
};

export const logout = () => {
  return {
    type: type.LOGOUT,
  };
};

// redux-saga ver
export const loginRequest = (userInfo) => {
  return {
    type: type.LOGIN_REQUEST,
    payload: userInfo,
  };
};

export const loginSuccess = (userName = null) => {
  return {
    type: type.LOGIN_SUCCESS,
    payload: userName,
  };
};
