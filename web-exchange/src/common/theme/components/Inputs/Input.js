import { Override } from '../../core/OverrideHelper';

const styles = (themeName, colors) => ({
  root: {
    fontWeight: '600',
    color: themeName === 'dark' ? 'white' : colors.primary.dark
  }
});

const props = themeName => ({});

/*
 * Dolomite Style for Input
 * API reference: https://material-ui.com/api/input
 */
export default new Override('MuiInput', styles, props);
