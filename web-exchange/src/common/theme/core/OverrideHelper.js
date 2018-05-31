import { createMuiTheme } from '@material-ui/core/styles';
import COLOR_PALETTE from '../color-palette';

/*
 * When creating an override of a Mui component, use 
 *   `newOverride(<Mui component name>, <style hash>, <default props hash>);`
 */
export class Override {
  constructor(name, styles, props) {
    this.name = name;
    this.styles = styles;
    this.props = props;
  }
}

/*
 * The palette in color-palette.js is run through createMuiTheme to generate
 * more variations of colors in the palette (dark, light, etc.). In order for
 * these colors to be accessible to an overrided component prior to theme
 * creation, we create a theme with only a palette (no overrides) and make
 * that palette available to all overrides.
 */
export const BaseColorProvider = createMuiTheme({ palette: COLOR_PALETTE }).palette;

/*
 * Generate MuiTheme `override` hash from array of Override instances
 */
export function generateStyleOverrides(overrides) {
  const styles = {};
  for (let i = 0; i < overrides.length; i += 1) {
    const override = overrides[i];
    styles[override.name] = override.styles;
  }
  return styles;
}

/*
 * Generate MuiTheme `props` hash from array of Override instances
 */
export function generateProps(overrides) {
  const props = {};
  for (let i = 0; i < overrides.length; i += 1) {
    const override = overrides[i];
    props[override.name] = override.props;
  }
  return props;
}


// /////////////////////
// Override Usage

/*
import { Override, BaseColorProvider as colors } from '../../core/OverrideHelper';

const styles = {
  root: {
    // styles that every component of this type will have
  },
  raised: {
    // styles that only components with `variant="raised"` will have
  },
  outlined: {
    border: `1px solid ${colors.primary.main}`, // use colors from palette.js like so
  }
};

const props = {
  // default props for all components of this type
};

// export the Override instance
export default new Override('MuiButton', styles, props);
*/
