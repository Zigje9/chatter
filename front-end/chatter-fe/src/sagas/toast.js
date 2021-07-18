import { all, put, fork, takeEvery, delay } from 'redux-saga/effects';
import * as type from '../actions/type';
import { addToast, deleteToast } from '../actions/toast';

function* manageToastSaga(action) {
  try {
    yield put(addToast(action.payload));
    yield delay(3000);
    yield put(deleteToast(action.payload));
  } catch (error) {
    console.log(error);
  }
}

function* watchToastSaga() {
  yield takeEvery(type.TOAST_REQUEST, manageToastSaga);
}

export default function* toastSaga() {
  yield all([fork(watchToastSaga)]);
}
