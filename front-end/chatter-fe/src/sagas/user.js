import { call, put, takeEvery } from 'redux-saga/effects';
import { loginSuccess } from '../actions/user';
import * as type from '../actions/type';
import { postAxios } from '../utils/axios';
import Cookies from 'js-cookie';

function* loginSaga(action) {
  const req = action.payload;
  try {
    const res = yield call(postAxios, ...['login/', req]);
    const {
      data: { cookie, sid, name },
    } = res;
    yield put(loginSuccess(name));
    Cookies.set('sid', sid, {
      path: cookie.path,
      maxAge: cookie.maxAge,
      expires: new Date(cookie.expire),
    });
  } catch (e) {
    console.log(e);
  }
}

function* watchLoginSaga() {
  yield takeEvery(type.LOGIN_REQUEST, loginSaga);
}

export default [watchLoginSaga()];
