import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllUserSuccess } from '../actions/userList';
import * as type from '../actions/type';
import { getAxios } from '../utils/axios';

function* getAllUserSaga() {
  try {
    const { data } = yield call(getAxios, 'members/');
    const userList = Object.entries(data).map(([userName, userId]) => {
      return { userName, userId, isLogin: false };
    });
    yield put(getAllUserSuccess(userList));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetAllUserSaga() {
  yield takeEvery(type.GET_ALL_USER_REQUEST, getAllUserSaga);
}

export default [watchGetAllUserSaga()];
