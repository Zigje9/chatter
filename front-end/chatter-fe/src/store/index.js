import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';
import { getAxios } from '../utils/axios';
import { loginInit, loginInitRequest } from '../actions/user';

const initialState = {
  user: { isLogin: false, userName: null, userProfile: null },
};

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);

sagaMiddleWare.run(rootSaga);

(() => {
  try {
    store.dispatch(loginInitRequest());
  } catch (error) {
    console.log(error);
  }
})();

export default store;
