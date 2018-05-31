import { Override, BaseColorProvider as colors } from '../../core/OverrideHelper';

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
