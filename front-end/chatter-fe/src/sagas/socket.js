import { call, put, takeEvery } from 'redux-saga/effects';
import * as type from '../actions/type';
import { connectSocketInitSuccess } from '../actions/socket';
import { io } from 'socket.io-client';
import 'dotenv/config';

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

function* getMessage() {
  // channel getMessage
  // socket.on("getMassage)
}

function* watchConnectInitSaga() {
  yield takeEvery(type.CONNECT_SOCKET_INIT_REQUEST, connectInitSaga);
}

export default [watchConnectInitSaga()];
