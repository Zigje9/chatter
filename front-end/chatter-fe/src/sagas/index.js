import { all } from 'redux-saga/effects';
import user from './user';
import userList from './userList';
import socket from './socket';

export default function* () {
  yield all([...user, ...userList, ...socket]);
}
