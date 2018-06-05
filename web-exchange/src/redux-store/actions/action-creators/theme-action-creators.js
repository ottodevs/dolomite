import * as themeActionTypes from '../action-types/theme-action-types';

export const changeTheme = theme => ({
  type: themeActionTypes.CHANGE_THEME,
  theme
});
