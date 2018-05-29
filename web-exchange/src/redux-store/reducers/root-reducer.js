import { combineReducers } from 'redux';
import tokenReducer from './token-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  token: tokenReducer
});

export default rootReducer;
