import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { generateOverrides, generateProps } from './core/Override';
import themeColors from './core/ThemeColors';

import palette from './palette';
import overrides from './overrides';

/*
 * Generates a Custom Material-UI Theme for the Dolomite Web Exchange
 */
function getDolomiteTheme() {
  if (window.generatedTheme == null) {
    window.generatedTheme = createMuiTheme({
      palette,
      overrides: generateOverrides(overrides),
      props: generateProps(overrides),
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
 * import { DolomiteThemeProvider } from 'path/to/.../theme/DolomiteTheme';
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
 * import { DolomiteColors as colors } from 'path/to/.../theme/DolomiteTheme';
 * { color: colors.primary.main }
 *
 */
export const DolomiteColors = themeColors;
