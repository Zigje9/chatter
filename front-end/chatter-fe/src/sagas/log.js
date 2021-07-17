import { all, call, put, fork, takeEvery } from 'redux-saga/effects';
import { publicChatLogOrigin, privateChatLogOrigin } from '../actions/socket';
import * as type from '../actions/type';
import { getAxios } from '../utils/axios';

function* getPublicLogSaga() {
  try {
    const { data } = yield call(getAxios, 'public/');
    const chatList = data.data.map((log) => {
      return {
        message: log.message,
        from: {
          userId: log.user_id,
          userName: log.user_name,
        },
        date: log.date,
      };
    });
    yield put(publicChatLogOrigin(chatList));
  } catch (error) {
    console.log(error);
  }
}

function* getPrivateLogSaga() {
  try {
    const { data } = yield call(getAxios, 'private/');
    console.log(data);
    const chatLog = data.map((log) => {
      const msgInfo = {};
      msgInfo[log.room_id] = {
        from: log.from_id,
        to: log.to_id,
        msg: log.message,
        date: log.date,
      };
      return msgInfo;
    });

    yield put(privateChatLogOrigin(chatLog));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetPublicLogSaga() {
  yield takeEvery(type.PUBLIC_CHAT_LOG_ORIGIN_REQUEST, getPublicLogSaga);
}

function* watchGetPrivateLogSaga() {
  yield takeEvery(type.PRIVATE_CHAT_LOG_ORIGIN_REQUEST, getPrivateLogSaga);
}

export default function* LogSaga() {
  yield all([fork(watchGetPublicLogSaga), fork(watchGetPrivateLogSaga)]);
}
