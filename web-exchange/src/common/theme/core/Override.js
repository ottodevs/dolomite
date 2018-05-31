
/*
 * When creating an override of a Mui component, use 
 *   `newOverride(<Mui component name>, <style hash>, <default props hash>);`
 */
export default class Override {
  constructor(name, styles, props) {
    this.name = name;
    this.styles = styles;
    this.props = props;
  }
}

/*
 * Generate MuiTheme `override` hash from array of Override instances
 */
export function generateOverrides(overrides) {
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
import Override from '../../core/Override';
import colors from '../../core/ThemeColors';

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
