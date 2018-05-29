import { createStore, applyMiddleware, compose } from 'redux';
import * as middleware from './middleware';
import reducer from './reducers/root-reducer';

/*
 composeEnhancers is for redux devtools setup
 https://github.com/zalmoxisus/redux-devtools-extension
*/
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(
    middleware.actionLogger,
    middleware.stateLogger
  ))
);
