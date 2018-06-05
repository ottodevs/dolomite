import * as themeActionTypes from '../actions/action-types/theme-action-types';
// import { DolomiteThemes as themes } from '../../common/theme/DolomiteTheme';

const INITIAL_STATE = {
  theme: 'dark'
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case themeActionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      };
    default:
      return state;
  }
};

export default themeReducer;
