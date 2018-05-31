import Override from '../../core/Override';
import colors from '../../core/ThemeColors';

const styles = {
  root: {
    fontWeight: '600',
    color: colors.primary.dark,
  }
};

const props = {

};

/*
 * Dolomite Style for Input
 * API reference: https://material-ui.com/api/input
 */
export default new Override('MuiInput', styles, props);
