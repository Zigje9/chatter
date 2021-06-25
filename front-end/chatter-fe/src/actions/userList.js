import * as type from './type';

export const getAllUserRequest = () => {
  return {
    type: type.GET_ALL_USER_REQUEST,
  };
};

export const getAllUserSuccess = (userList) => {
  return {
    type: type.GET_ALL_USER_SUCCESS,
    payload: userList,
  };
};
