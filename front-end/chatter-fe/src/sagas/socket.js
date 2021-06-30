import { call, put, take, takeEvery, apply } from 'redux-saga/effects';
import * as type from '../actions/type';
import { connectSocketInitSuccess } from '../actions/socket';
import { createSocketChannel } from './createSocketChannel';
import { io } from 'socket.io-client';
import 'dotenv/config';
import { changeAllUserOnline } from '../actions/userList';
import store from '../store';

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

function tempConnectInitSaga(userName) {
  const socket = io(process.env.REACT_APP_SOCKET_SERVER, {
    auth: {
      userName,
    },
  });
  return new Promise((resolve, reject) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function* broadcastingSaga(socket) {
  const channel = yield call(createSocketChannel, socket);

  while (true) {
    const onUsers = yield take(channel);
    yield put(changeAllUserOnline(onUsers));
  }
}

function* createRoomSaga(action) {
  const currentSocket = store.getState().socket.socket;
  yield apply(currentSocket, currentSocket.emit, ['USER_ACCOUNTS', action.payload]);
  const channel = yield call(createSocketChannel, action.type);

  while (true) {
    yield take(channel);
  }
}

function* watchConnectInitSaga() {
  yield takeEvery(type.CONNECT_SOCKET_INIT_REQUEST, connectInitSaga);
}

function* watchBroadcasting() {
  yield takeEvery(type.BROADCASTING, broadcastingSaga);
}

function* watchCreateRoom() {
  yield takeEvery('USER_ACCOUNTS', createRoomSaga);
}

function* flow() {
  try {
    const action = yield take('TEMP_CONNECT');
    const socket = yield call(tempConnectInitSaga, ...[action.payload]);

    const channel = yield createSocketChannel(socket);

    while (true) {
      const onUsers = yield take(channel);
      yield put(changeAllUserOnline(onUsers));
    }
  } catch (error) {
    console.log(error);
  }
}

// export default [flow(), watchBroadcasting(), watchCreateRoom()];
export default [flow()];
