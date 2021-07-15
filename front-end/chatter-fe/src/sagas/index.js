import { all, fork } from 'redux-saga/effects';
import user from './user';
import socket from './socket';
import userList from './userList';
import log from './log';

function* rootSaga() {
  yield all([fork(user), fork(userList), fork(socket), fork(log)]);
}

export default rootSaga;
