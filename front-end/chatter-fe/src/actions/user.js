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
