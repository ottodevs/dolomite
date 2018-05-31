import Override from '../../core/Override';
import colors from '../../core/ThemeColors';

const styles = {
  root: {
    // styles that every component of this type will have
    borderRadius: 3,
  },
  raised: {
    // styles that only components with `variant="raised"` will have
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
  outlined: {
    border: `1px solid ${colors.primary.main}`, // use colors from palette.js like so
  }
};

const props = {
  // default props for all components of this type
  disabled: false,
};

/*
 * Dolomite Style for Button
 * API reference: https://material-ui.com/api/button
 */
export default new Override('MuiButton', styles, props);
