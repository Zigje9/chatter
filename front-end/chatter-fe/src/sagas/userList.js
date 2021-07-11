import { all, call, put, fork, takeEvery } from 'redux-saga/effects';
import { getAllUserSuccess } from '../actions/userList';
import * as type from '../actions/type';
import { getAxios } from '../utils/axios';

function* getAllUserSaga() {
  try {
    const { data } = yield call(getAxios, 'members/');
    const userList = Object.entries(data).map(([userName, { user_id, user_profile }]) => {
      return { userName, userId: user_id, userProfile: user_profile, isLogin: false };
    });
    yield put(getAllUserSuccess(userList));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetAllUserSaga() {
  yield takeEvery(type.GET_ALL_USER_REQUEST, getAllUserSaga);
}

export default function* userListSage() {
  yield all([fork(watchGetAllUserSaga)]);
}
