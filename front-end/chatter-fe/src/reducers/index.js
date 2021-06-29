import { combineReducers } from 'redux';
import user from './user';
import userList from './userList';
import socket from './socket';

const rootReducer = combineReducers({
  user,
  userList,
  socket,
});

export default rootReducer;
