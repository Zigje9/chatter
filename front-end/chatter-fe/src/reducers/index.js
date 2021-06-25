import { combineReducers } from 'redux';
import user from './user';
import userList from './userList';

const rootReducer = combineReducers({
  user,
  userList,
});

export default rootReducer;
