import { all, put, fork, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as type from '../actions/type';
import { addToast, deleteToast } from '../actions/toast';

function* manageToastSaga(action) {
  try {
    yield put(addToast(action.payload));
    yield delay(5000);
    yield put(deleteToast(action.payload));
  } catch (error) {
    console.log(error);
  }
}

function* watchToastSaga(action) {
  yield takeEvery(type.TOAST_REQUEST, manageToastSaga(action));
}

export default function* toastSaga() {
  yield all([fork(watchToastSaga)]);
}
