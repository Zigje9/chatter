import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';
import { getAxios } from '../utils/axios';

const initialState = {
  user: { isLogin: false, userName: null },
};

(async () => {
  try {
    const { data } = await getAxios('/auth');
    initialState.user = { isLogin: data.isLogin, userName: data.userName };
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);

sagaMiddleWare.run(rootSaga);

export default store;
