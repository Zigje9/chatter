import { call, put, takeEvery } from 'redux-saga/effects';
import store from '../store';
import { getAllUserSuccess } from '../actions/userList';
import * as type from '../actions/type';
import { getAxios } from '../utils/axios';

function* getAllUserSaga() {
  try {
    const { data } = yield call(getAxios, 'members/');
    const { userName: curUser } = store.getState().user;
    const userList = Object.entries(data).map(([userName, { user_id, user_profile }]) => {
      if (userName === curUser) {
        return { userName: '나', userId: user_id, userProfile: user_profile, isLogin: false };
      }
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

export default [watchGetAllUserSaga()];
