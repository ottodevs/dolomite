import { Override } from '../../core/OverrideHelper';

const styles = (themeName, colors) => ({
  root: {
    // styles that every component of this type will have
    borderRadius: 3,
    color: colors.primary.dark
  },
  raised: {
    // styles that only components with `variant="raised"` will have
    background:
      themeName === 'dark'
        ? 'linear-gradient(45deg, #ffffff 30%, #ffffff 90%)'
        : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    color: themeName === 'dark' ? `${colors.primary.dark} !important` : 'white',
    fontWeight: themeName === 'dark' ? '600' : '500',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(70, 70, 70, .10)'
  },
  outlined: {
    border: `1px solid ${colors.primary.main}` // use colors from palette.js like so
  }
});

const props = themeName => ({
  // default props for all components of this type
  disabled: false
});

/*
 * Dolomite Style for Button
 * API reference: https://material-ui.com/api/button
 */
export default new Override('MuiButton', styles, props);
