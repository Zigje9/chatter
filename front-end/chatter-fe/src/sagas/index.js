import { all, fork } from 'redux-saga/effects';
import user from './user';
import socket from './socket';
import userList from './userList';
import log from './log';
import room from './room';
import toast from './toast';

function* rootSaga() {
  yield all([fork(user), fork(userList), fork(socket), fork(log), fork(room), fork(toast)]);
}

export default rootSaga;
