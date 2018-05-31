import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Override from './core/Override';
import themeColors from './core/ThemeColors';

import palette from './palette.js';

require('./overrides');

/*
 * Generates a Custom Material-UI Theme for the Dolomite Web Exchange
 */
function getDolomiteTheme() {
  if (window.generatedTheme == null) {
    window.generatedTheme = createMuiTheme({
      palette,
      overrides: Override.getOverrides(),
      props: Override.getProps(),
    });
  }
  return window.generatedTheme;
}

export default getDolomiteTheme();

/*
 * Parent component that enables the Dolomite Theme
 * 
 * Usage:
 *
 * import { DolomiteThemeProvider } from '../../common/theme/DolomiteTheme';
 *
 * <DolomiteThemeProvider>  ... Rest of App ...  </DolomiteThemeProvider
 */
export const DolomiteThemeProvider = props => (
  <MuiThemeProvider theme={getDolomiteTheme()}>
    {props.children}
  </MuiThemeProvider>
);

DolomiteThemeProvider.propTypes = { children: PropTypes.element.isRequired };

/*
 * Get the Dolomite Theme color palette
 *
 * Usage: 
 *
 * import { DolomiteColors as colors } from '../../common/theme/DolomiteTheme';
 * { color: colors.primary.main }
 *
 */
export const DolomiteColors = themeColors;
