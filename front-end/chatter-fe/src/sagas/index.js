import { all, fork } from 'redux-saga/effects';
import user from './user';
import socket from './socket';
import userList from './userList';

function* rootSaga() {
  yield all([fork(user), fork(userList), fork(socket)]);
}

export default rootSaga;
