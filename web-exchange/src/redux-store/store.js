import { createStore, applyMiddleware, compose } from 'redux';
import * as middleware from './middleware';
import reducer from './reducers/root-reducer';

const REDUX_STATE_KEY = 'REDUX_STATE';

/*
 composeEnhancers is for redux devtools setup
 https://github.com/zalmoxisus/redux-devtools-extension
*/
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem(REDUX_STATE_KEY)
  ? JSON.parse(localStorage.getItem(REDUX_STATE_KEY))
  : {};
const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(
    applyMiddleware(middleware.actionLogger, middleware.stateLogger)
  )
);

store.subscribe(() => {
  localStorage.setItem(REDUX_STATE_KEY, JSON.stringify(store.getState()));
});

export default store;
