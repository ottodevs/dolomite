import { createMuiTheme } from '@material-ui/core/styles';
import Override from './core/Override';
import themeColors from './core/ThemeColors';

import palette from './palette.js';

require('./overrides');

/*
 * Generates a Custom Material-UI Theme for the Dolomite Web Exchange
 * 
 * Material-UI API reference: https://material-ui.com/customization/themes/
 *
 */
export default class DolomiteTheme {
  /*
   * Run once when the root component loads, and use 
   * DolomiteTheme.theme() to get an instance of it later
   *  in theweb application's life cycle
   * 
   * @returns an instance of a Material-UI custom theme.
   */
  static generate() {
    DolomiteTheme.generatedTheme = createMuiTheme({
      palette,
      overrides: Override.getOverrides(),
      props: Override.getProps(),
    });

    return DolomiteTheme.generatedTheme;
  }

  /*
   * Get an instance of the custom material-ui theme.
   * MUST call DolomiteTheme.generate() at some point prior
   */
  static theme() {
    return DolomiteTheme.generatedTheme;
  }

  /*
   * Example Use: DolomiteTheme.colors().primary.main
   * MUST call DolomiteTheme.generate() at some point prior
   */
  static colors() {
    return themeColors;
  }
}
