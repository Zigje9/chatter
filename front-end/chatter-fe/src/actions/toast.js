import * as type from './type';

export const toastRequest = (msgInfo) => {
  return {
    type: type.TOAST_REQUEST,
    payload: msgInfo,
  };
};

export const addToast = (msgInfo) => {
  return {
    type: type.TOAST_ADD_MESSAGE,
    payload: msgInfo,
  };
};

export const deleteToast = (msgInfo) => {
  return {
    type: type.TOAST_DELETE_MESSAGE,
    payload: msgInfo,
  };
};
