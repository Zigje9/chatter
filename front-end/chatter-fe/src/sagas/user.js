import { call, put, takeEvery } from 'redux-saga/effects';
import { loginInitSuccess, loginSuccess } from '../actions/user';
import * as type from '../actions/type';
import { getAxios, postAxios } from '../utils/axios';
import Cookies from 'js-cookie';

function* loginInitSaga() {
  try {
    const { data } = yield call(getAxios, '/auth');
    const { isLogin, userName, userProfile } = data;
    yield put(loginInitSuccess({ isLogin, userName, userProfile }));
  } catch (error) {
    console.log(error);
  }
}

function* loginSaga(action) {
  const req = action.payload;
  try {
    const res = yield call(postAxios, ...['login/', req]);
    const {
      data: { cookie, sid, name, profile },
    } = res;
    yield put(loginSuccess(name, profile));
    Cookies.set('sid', sid, {
      path: cookie.path,
      maxAge: cookie.maxAge,
      expires: new Date(cookie.expire),
    });
  } catch (error) {
    console.log(error);
  }
}

function* watchLoginInitSaga() {
  yield takeEvery(type.LOGIN_INIT_REQUEST, loginInitSaga);
}

function* watchLoginSaga() {
  yield takeEvery(type.LOGIN_REQUEST, loginSaga);
}

export default [watchLoginSaga(), watchLoginInitSaga()];
