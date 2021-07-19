import { call, fork, put, take, all } from 'redux-saga/effects';
import { createChannel } from './createChannel';
import { io } from 'socket.io-client';
import * as type from '../actions/type';
import 'dotenv/config';
import { getAxios } from '../utils/axios';

const connect = (userInfo) => {
  const socket = io(process.env.REACT_APP_SOCKET_SERVER, {
    auth: {
      userInfo,
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
    const action = yield take(channel);
    yield put(action);
  }
}

function* sendToAllMsg(socket) {
  while (true) {
    const { payload } = yield take(type.SEND_TO_ALL_MSG);
    socket.emit(type.MESSAGE, payload);
  }
}

function* requestCreateRoom(socket) {
  while (true) {
    const { payload } = yield take(type.REQUEST_CREATE_ROOM);
    socket.emit(type.REQUEST_CREATE_ROOM, payload);
  }
}

function* sendPrivateMsg(socket) {
  while (true) {
    const { payload } = yield take(type.SEND_PRIVATE_MSG);
    socket.emit(type.SEND_PRIVATE_MSG, payload);
  }
}

function* selfLogout(socket) {
  while (true) {
    yield call(getAxios, 'logout/');
    yield take(type.LOGOUT_SOCKET);
    socket.emit(type.LOGOUT_SOCKET);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(sendToAllMsg, socket);
  yield fork(requestCreateRoom, socket);
  yield fork(sendPrivateMsg, socket);
  yield fork(selfLogout, socket);
}

function* flow() {
  while (true) {
    const { payload } = yield take(type.CONNECT_SOCKET_INIT_REQUEST);
    const socket = yield call(connect, payload);
    yield fork(handleIO, socket);
    socket.emit(type.BROADCASTING);
  }
}

export default function* socketSaga() {
  yield all([fork(flow)]);
}
