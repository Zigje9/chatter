import { call, fork, put, take } from 'redux-saga/effects';
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
  console.log(socket);
  const channel = yield call(createChannel, socket);
  console.log(channel);

  while (true) {
    console.log('b');
    let action = yield take(channel);
    console.log('a');
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
    const task = yield fork(handleIO, socket);
    console.log(task);
  }
}

export default flow;
