import { all, fork } from 'redux-saga/effects';
// import user from './user';
import { watchLoginSaga, watchLoginInitSaga } from './user';
// import userList from './userList';
import { watchGetAllUserSaga } from './userList';
import socket from './socket';

export default function* () {
  // yield all([...user, ...userList, fork(socket)]);
  yield all([
    fork(watchLoginSaga),
    fork(watchLoginInitSaga),
    fork(watchGetAllUserSaga),
    fork(socket),
  ]);
  // yield fork(watchLoginInitSaga)
  // yield fork(watchLoginSaga)
  // yield fork(watchLog)
}
