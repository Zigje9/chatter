import { combineReducers } from 'redux';
import user from './user';
import userList from './userList';
import socket from './socket';
import toast from './toast';

const rootReducer = combineReducers({
  user,
  userList,
  socket,
  toast,
});

export default rootReducer;
