import { all } from 'redux-saga/effects';
import user from './user';
import userList from './userList';

export default function* () {
  yield all([...user, ...userList]);
}
