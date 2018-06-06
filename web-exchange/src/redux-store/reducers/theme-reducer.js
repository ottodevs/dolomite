import cookies from 'react-cookies';

import * as themeActionTypes from '../actions/action-types/theme-action-types';
import * as themes from '../../common/theme/themes';

const INITIAL_STATE = {
  theme: themes.DEFAULT
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
