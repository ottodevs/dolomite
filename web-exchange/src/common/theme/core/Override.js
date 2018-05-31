
/*
 * The Override Singleton is used by `overrides.js` to register Override objects
 * which will later be used to generate a MuiTheme in DolomiteThemes.js
 *
 * When creating an override of a Mui component, use 
 *   `newOverride(<Mui component name>, <style hash>, <default props hash>);`
 */
export default class Override {
  static add(override) {
    if (window.overrides == null) window.overrides = [];
    if (!window.overrides.some(o => o.name === override.name)) { window.overrides.push(override); }
  }

  static getOverrides() {
    const overrides = {};
    for (let i = 0; i < window.overrides.length; i += 1) {
      const override = window.overrides[i];
      overrides[override.name] = override.styles;
    }
    return overrides;
  }

  static getProps() {
    const props = {};
    for (let i = 0; i < window.overrides.length; i += 1) {
      const override = window.overrides[i];
      props[override.name] = override.props;
    }
    return props;
  }

  constructor(name, styles, props) {
    this.name = name;
    this.styles = styles;
    this.props = props;
  }
}

/* Override Usage: */

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
