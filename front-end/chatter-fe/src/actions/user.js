import * as type from './type';

export const logout = () => {
  return {
    type: type.LOGOUT,
  };
};

export const loginInitRequest = () => {
  return {
    type: type.LOGIN_INIT_REQUEST,
  };
};

export const loginInitSuccess = (loginInfo) => {
  return {
    type: type.LOGIN_INIT_SUCCESS,
    payload: loginInfo,
  };
};

// redux-saga ver
export const loginRequest = (userInfo) => {
  return {
    type: type.LOGIN_REQUEST,
    payload: userInfo,
  };
};

export const loginSuccess = (userName = null, userProfile = null) => {
  return {
    type: type.LOGIN_SUCCESS,
    payload: { userName, userProfile },
  };
};
