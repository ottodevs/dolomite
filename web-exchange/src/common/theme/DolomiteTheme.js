import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { generateStyleOverrides, generateProps } from './core/Override';
import themeColors from './core/ThemeColors';

import COLOR_PALETTE from './color-palette';
import COMPONENT_OVERRIDES from './component-overrides';

const DOLOMITE_THEME = createMuiTheme({
  COLOR_PALETTE,
  overrides: generateStyleOverrides(COMPONENT_OVERRIDES),
  props: generateProps(COMPONENT_OVERRIDES),
});

const ThemeContext = React.createContext(DOLOMITE_THEME);

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
  <ThemeContext.Provider value={DOLOMITE_THEME}>
    <ThemeContext.Consumer>
      { theme => (
        <MuiThemeProvider theme={theme}>
          {props.children}
        </MuiThemeProvider>)
      }
    </ThemeContext.Consumer>
  </ThemeContext.Provider>
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
