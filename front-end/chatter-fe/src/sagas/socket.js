import { call, fork, put, take, all } from 'redux-saga/effects';
import { createChannel } from './createChannel';
import { io } from 'socket.io-client';
import 'dotenv/config';

const connect = (userName) => {
  const socket = io(process.env.REACT_APP_SOCKET_SERVER, {
    auth: {
      userName,
    },
  });
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

function* read(socket) {
  const channel = yield call(createChannel, socket);

  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  while (true) {
    const { payload } = yield take('SENDMESSAGE');
    socket.emit('message', payload);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* flow() {
  while (true) {
    const { payload } = yield take('CONNECT_SOCKET_INIT_REQUEST');
    const socket = yield call(connect, payload);
    yield fork(handleIO, socket);
  }
}

export default function* socketSaga() {
  yield all([fork(flow)]);
}
