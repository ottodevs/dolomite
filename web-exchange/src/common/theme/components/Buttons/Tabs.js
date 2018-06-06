import { Override } from '../../core/OverrideHelper';

const styles = (forTheme, colors) => ({
  root: {},
  indicator: {
    bottom: 3,
    transform: 'scale(0.5, 1)',
    background:
      forTheme(
        {
          light: colors.primary.dark
        },
        colors.text.primary
      ) + '!important'
  }
});

const props = forTheme => ({});

/*
 * Dolomite Style for Tabs
 * API reference: https://material-ui.com/api/tabs
 */
export default new Override('MuiTabs', styles, props);
