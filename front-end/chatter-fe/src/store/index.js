import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';
import { getAxios } from '../utils/axios';

const middleware = [];

const initialState = {
  user: { isLogin: false, userName: null },
};

(() => {
  try {
    const { data } = getAxios('/auth');
    initialState.user = { isLogin: data.isLogin, userName: data.userName };
  } catch (error) {
    console.log(error);
  }
})();

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
