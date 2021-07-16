import { all, call, put, fork, takeEvery } from 'redux-saga/effects';
import { privateRoomOrigin } from '../actions/socket';
import * as type from '../actions/type';
import { getAxios } from '../utils/axios';

function* getPrivateRoomOriginSaga() {
  try {
    const data = yield call(getAxios, 'room/');
    console.log(data);
    console.log('here', [...data]);
    yield put(privateRoomOrigin([...data]));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetPrivateRoomOriginSaga() {
  yield takeEvery(type.PRIVATE_ROOM_ORIGIN_REQUEST, getPrivateRoomOriginSaga);
}

export default function* privateRoomSaga() {
  yield all([fork(watchGetPrivateRoomOriginSaga)]);
}
