import { call, put, takeEvery } from 'redux-saga/effects';
import {postAxios} from "../utils/axios";

// function* getPostsSaga() {
//   try {
//     const posts = yield call(postsAPI.getPosts); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
//     yield put({
//       type: GET_POSTS_SUCCESS,
//       payload: posts
//     }); // 성공 액션 디스패치
//   } catch (e) {
//     yield put({
//       type: GET_POSTS_ERROR,
//       error: true,
//       payload: e
//     }); // 실패 액션 디스패치
//   }
// }

function* loginSaga(action) {
  const req = action.payload
  try {
    const res = yield call(postAxios('login/', req));

  } catch (e) {

  }
}