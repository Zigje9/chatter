import * as type from '../actions/type';

// const initialState = {
//   isLogin: false,
// };

const user = (state = {}, action) => {
  switch (action.type) {
    case type.LOGIN:
      return { isLogin: true, userName: action.payload };
    case type.LOGOUT:
      return { isLogin: false, userName: null };
    default:
      return state;
  }
};

export default user;
