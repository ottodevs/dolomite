import { Override } from '../../core/OverrideHelper';

const styles = (forTheme, colors) => ({
  root: {
    fontWeight: '600',
    color: forTheme({
      dark: 'white',
      light: colors.primary.dark
    })
  }
});

const props = forTheme => ({});

/*
 * Dolomite Style for Input
 * API reference: https://material-ui.com/api/input
 */
export default new Override('MuiInput', styles, props);
