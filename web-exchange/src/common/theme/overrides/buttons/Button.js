import Override from '../../core/Override';
import colors from '../../core/ThemeColors';

// Each key-value pair corresponds to a variant and its css style
// `root` styles are used for every component of this type, regardless of variant
const styles = {
  root: {
    borderRadius: 3,
  },
  raised: {
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

// These props will be set with given default values for every component of this type
const props = {
  disabled: false,
};

/*
 * Dolomite Style for Button
 *
 * API reference: https://material-ui.com/api/button
 */
export default new Override('MuiButton', styles, props);
