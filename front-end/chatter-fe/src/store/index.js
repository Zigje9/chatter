import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

const middleware = [];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
