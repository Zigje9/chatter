import { all, call, put, fork, takeEvery } from 'redux-saga/effects';
import { publicChatLogOrigin } from '../actions/socket';
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

function* watchGetPublicLogSaga() {
  yield takeEvery(type.PUBLIC_CHAT_LOG_ORIGIN_REQUEST, getPublicLogSaga);
}

export default function* publicLogSaga() {
  yield all([fork(watchGetPublicLogSaga)]);
}
