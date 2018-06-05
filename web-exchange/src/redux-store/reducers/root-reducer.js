import { combineReducers } from 'redux';
import tokenReducer from './token-reducer';
import userReducer from './user-reducer';
import themeReducer from './theme-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  theme: themeReducer
});

export default rootReducer;
