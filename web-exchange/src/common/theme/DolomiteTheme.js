import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import {
  generateStyleOverrides,
  generateProps,
  BaseColorProvider
} from './core/OverrideHelper';
import { COLOR_PALETTE } from './core/PaletteProvider';
import COMPONENT_OVERRIDES from './component-overrides';

const DOLOMITE_THEME = createMuiTheme({
  COLOR_PALETTE,
  overrides: generateStyleOverrides(COMPONENT_OVERRIDES),
  props: generateProps(COMPONENT_OVERRIDES)
});

/*
 * Parent component that enables the Dolomite Theme
 *
 * <DolomiteThemeProvider>  ... Rest of App ...  </DolomiteThemeProvider>
 */
export const DolomiteThemeProvider = props => (
  <MuiThemeProvider theme={DOLOMITE_THEME}>{props.children}</MuiThemeProvider>
);

DolomiteThemeProvider.propTypes = { children: PropTypes.element.isRequired };

export const DolomiteColors = BaseColorProvider;
