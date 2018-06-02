import React from 'react';
import PropTypes from 'prop-types';
import {
  Override,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';

import {
  generateStyleOverrides,
  generateProps,
  BaseColorProvider
} from './core/OverrideHelper';
import { COLOR_PALETTE } from './core/PaletteProvider';

/*
 * Load all Override instances from the `./components` directory recursivley
 */
const COMPONENT_OVERRIDES = (() => {
  try {
    const context = require.context('./components', true, /\.js$/);
    const components = context.keys().map(context);

    return components
      .filter((imported) => {
        try {
          return imported.default.constructor.name === 'Override';
        } catch (e) {
          return false;
        }
      })
      .map(override => override.default);
  } catch (e) {
    return [];
  }
})();

/*
 * Constructed Material-UI Theme using color palette and component overrides
 */
const DOLOMITE_THEME = createMuiTheme({
  COLOR_PALETTE,
  overrides: generateStyleOverrides(COMPONENT_OVERRIDES),
  props: generateProps(COMPONENT_OVERRIDES)
});

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
  <MuiThemeProvider theme={DOLOMITE_THEME}>{props.children}</MuiThemeProvider>
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
export const DolomiteColors = BaseColorProvider;
