import { call, put, take, takeEvery } from 'redux-saga/effects';
import * as type from '../actions/type';
import { connectSocketInitSuccess } from '../actions/socket';
import { createSocketChannel } from './createSocketChannel';
import { io } from 'socket.io-client';
import 'dotenv/config';
import { changeAllUserOnline } from '../actions/userList';

function* connectInitSaga(action) {
  try {
    const socket = yield call(
      io,
      ...[
        process.env.REACT_APP_SOCKET_SERVER,
        {
          auth: {
            userName: action.payload,
          },
        },
      ],
    );
    yield put(connectSocketInitSuccess(socket));
  } catch (error) {
    console.log(error);
  }
}

function* broadcastingSaga(type) {
  const channel = yield call(createSocketChannel, type);

  while (true) {
    const onUsers = yield take(channel);
    yield put(changeAllUserOnline(onUsers));
  }
}

function* watchConnectInitSaga() {
  yield takeEvery(type.CONNECT_SOCKET_INIT_REQUEST, connectInitSaga);
}

function* watchBroadcasting() {
  yield takeEvery(type.BROADCASTING, broadcastingSaga);
}

export default [watchConnectInitSaga(), watchBroadcasting()];
