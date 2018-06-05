import { Override } from '../../core/OverrideHelper';

const styles = (forTheme, colors) => ({
  root: {
    textTransform: 'normal',
    height: '45px',
    borderRadius: 5,
    fontWeight: 'lighter'
  },
  selected: {
    color: `${forTheme(
      {
        light: colors.primary.dark
      },
      colors.text.primary
    )}!important`
  },
  label: {
    fontSize: '20px !important',
    fontWeight: 'lighter'
  }
});

const props = forTheme => ({
  disableRipple: true
});

/*
 * Dolomite Style for an individual Tab
 * API reference: https://material-ui.com/api/tab
 */
export default new Override('MuiTab', styles, props);
