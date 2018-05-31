import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { generateOverrides, generateProps } from './core/Override';
import themeColors from './core/ThemeColors';

import palette from './palette';
import overrides from './overrides';

const MUI_THEME = createMuiTheme({
  palette,
  overrides: generateOverrides(overrides),
  props: generateProps(overrides),
});

const ThemeContext = React.createContext(MUI_THEME);

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
  <ThemeContext.Provider value={MUI_THEME}>
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
