import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as r from 'ramda';

import store from '../../redux-store/store';
import * as themeActionCreators from '../../redux-store/actions/action-creators/theme-action-creators';
import { generateProps, generateStyleOverrides } from './core/OverrideHelper';
import { SCSS_THEMES, setCssColors } from './core/StyleSheetThemeProvider';

/*
 * Load all Override instances from the `./components` directory recursivley
 */
const COMPONENT_OVERRIDES = (() => {
  try {
    const context = require.context('./components', true, /\.js$/);
    const components = context.keys().map(context);

    return components
      .filter(imported => {
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
export const DolomiteThemes = r.mapObjIndexed(
  (palette, name) =>
    createMuiTheme({
      name,
      palette,
      overrides: generateStyleOverrides(name, palette, COMPONENT_OVERRIDES),
      props: generateProps(name, COMPONENT_OVERRIDES)
    }),
  SCSS_THEMES
);

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

providerComponent.propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.object.isRequired
};

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
 * Set the current theme by it's name. If name is null, it will select the next theme
 */
function changeCurrentTheme(name) {
  let themeName = name;
  if (themeName == null) {
    const themeNames = Object.keys(SCSS_THEMES);
    const themeIndex = themeNames.indexOf(currentTheme().name);
    const themeIsLast = themeIndex >= themeNames.length - 1;
    themeName = themeIsLast ? themeNames[0] : themeNames[themeIndex + 1];
  }

  store.dispatch(themeActionCreators.changeTheme(themeName));
  setCssColors(DolomiteThemes[themeName].palette);
}

/*
 * Provides wrapped components with an instance of the current color palette
 *
 * Usage:
 *
 * export default withThemeColors(MyComponent);
 *
 * // In render
 * <div style={{ color: props.colors.primary.light }}></div>
 */
export const withThemeColors = WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          colors={currentTheme().palette || {}}
        />
      );
    }
  };

/*
 * Provides wrapped components with an instance of the current theme
 *
 * Usage:
 *
 * export default withTheme(MyComponent);
 *
 * <div style={{ color: props.theme == 'light' ? '#000' : '#fff' }}></div>
 */
export const withTheme = WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {theme => <WrappedComponent {...this.props} theme={theme} />}
        </ThemeContext.Consumer>
      );
    }
  };

/*
 * Provides a component with a function that will change the site's theme
 *
 * Usage:
 *
 * export default withTheme(MyComponent);
 *
 * <Button onClick={() => props.requestThemeChange()}>Swap Theme</Button>
 *
 * NOTE: If the name given to requestThemeChange is null the next available theme will be chosen
 */
export const withThemeChanger = WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {theme => (
            <WrappedComponent
              {...this.props}
              theme={theme}
              requestThemeChange={name => changeCurrentTheme(name)}
            />
          )}
        </ThemeContext.Consumer>
      );
    }
  };
