import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import cookies from 'react-cookies';

import store from '../../redux-store/store';
import * as themeActionCreators from '../../redux-store/actions/action-creators/theme-action-creators';
import { generateStyleOverrides, generateProps } from './core/OverrideHelper';
import { SCSS_THEMES, setCssColors } from './core/StyleSheetThemeProvider';

/*
 * Load all Override instances from the `./components` directory recursivley
 */
const COMPONENT_OVERRIDES = (() => {
  try {
    const context = require.context('./components', true, /\.js$/);
    const components = context.keys().map(context);

    return components
      .filter((imported) => {
        try {
          return imported.default.constructor.name === 'Override';
        } catch (e) {
          return false;
        }
      })
      .map(override => override.default);
  } catch (e) {
    return [];
  }
})();

/*
 * Constructed Material-UI Themes using color palettes and component overrides
 */
export const DolomiteThemes = (() => {
  const keys = Object.keys(SCSS_THEMES);
  const themes = {};

  for (let i = 0; i < keys.length; i += 1) {
    const name = keys[i];

    const theme = createMuiTheme({
      palette: SCSS_THEMES[name],
      overrides: generateStyleOverrides(
        name,
        SCSS_THEMES[name],
        COMPONENT_OVERRIDES
      ),
      props: generateProps(name, COMPONENT_OVERRIDES)
    });
    theme.name = name;
    themes[name] = theme;
  }

  return themes;
})();

/*
 * React Context used in conjuction with redux to make the theme part of application state
 */
export const ThemeContext = React.createContext();

/*
 * Parent component that enables the Dolomite Theme
 *
 * <DolomiteThemeProvider>  ... Rest of App ...  </DolomiteThemeProvider>
 */
const providerComponent = props => (
  <ThemeContext.Provider value={DolomiteThemes[props.theme]}>
    <ThemeContext.Consumer>
      {theme => (
        <MuiThemeProvider theme={theme}>
          <div>
            {props.children}
            <div id="scss-color-anchor" />
          </div>
        </MuiThemeProvider>
      )}
    </ThemeContext.Consumer>
  </ThemeContext.Provider>
);

/*eslint-disable */
providerComponent.propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.object.isRequired
};
/* eslint-enable */

export const DolomiteThemeProvider = connect(state => ({
  theme: state.theme.theme
}))(providerComponent);

/*
 * Get the instance of the current theme.
 *
 * currentTheme.name to get the theme's name
 * currentTheme.palette to get the theme's color palette
 */
export const currentTheme = () => DolomiteThemes[store.getState().theme.theme];
if (currentTheme()) setCssColors(currentTheme().palette); // setup initial css colors

/*
 * Provides wrapped components with an instance of the current color palette
 *
 * Usage: 
 *
 * withThemeColors((colors) => (
 *  <div style={{ color: colors.textPrimary.light }}></div>
 * ));
 */
export const withThemeColors = callback => (
  <ThemeContext.Consumer>
    {theme => callback(theme.palette)}
  </ThemeContext.Consumer>
);

/*
 * Provides wrapped components with an instance of the current theme
 *
 * Usage: 
 *
 * withTheme((theme) => (
 *  <div style={{ color: theme == 'light' ? '#000' : '#fff' }}></div>
 * ));
 */
export const withTheme = callback => (
  <ThemeContext.Consumer>{theme => callback(theme)}</ThemeContext.Consumer>
);

/*
 * Provides a component with a function that will change the site's theme
 *
 * Usage: 
 *
 * dolomiteThemeDispatcher((changeTheme) => (
 *  <Button onClick={() => changeTheme('dark')}>Use Dark Theme</Button>
 * ));
 *
 * NOTE: If there are only 2 themes, sending null as `themeName` will swap the themes
 */
export const dolomiteThemeDispatcher = callback =>
  callback((name) => {
    /*eslint-disable */
    var themeName = name;
    if (name == null) {
      const themeNames = Object.keys(SCSS_THEMES);
      const themeIndex = themeNames.indexOf(currentTheme().name);
      themeName =
        themeIndex >= themeNames.length - 1
          ? themeNames[0]
          : themeNames[themeIndex + 1];
    }

    cookies.save("selectedTheme", themeName, { path: "/" });
    store.dispatch(themeActionCreators.changeTheme(themeName));
    setCssColors(DolomiteThemes[themeName].palette);
    /* eslint-enable */
  });
