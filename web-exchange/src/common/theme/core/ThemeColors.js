import { createMuiTheme } from '@material-ui/core/styles';
import themePalette from '../palette';

/*
 * When in building component override, use:
 *   `import colors from '../../core/ThemeColors';`
 * For the rest of the application, use:
 *   `import { DolomiteColors as colors } from '../../common/theme/DolomiteTheme`
 *
 * Why doesn't this logic use the theme generated in DolomiteTheme.js?
 * When building the actual theme in DolomiteTheme.js, overrides will be imported
 * and those overrides will be using colors generated by a base palette (see palette.js)
 * and then enhanced by `createMuiTheme.` The problem is that in order for the enhanced
 * palette to be available in the overrides imported in the overrides.js file, an MuiTheme
 * must be already created. In order to subvert a feedback loop, ThemeColors creates an
 * MuiTheme with ONLY the colors (no overrides) and makes the generated enhanced palette
 * available to the overrides.
 */
function getThemePalette() {
  if (window.paletteTheme == null) window.paletteTheme = createMuiTheme({ palette: themePalette });
  return window.paletteTheme.palette;
}

export default getThemePalette();