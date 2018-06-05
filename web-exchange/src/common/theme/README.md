# Custom Material-UI Theme

Dolomite relies on [material-ui](https://github.com/mui-org/material-ui) for the majority of it's components. We use a material-ui [custom theme](https://material-ui.com/customization/themes/) to add our own look to these components. We have provided helper classes/functions to make the customization of material-ui components quick, intuitive and easy.

## Create a Theme

In the `themes` folder, create an `scss` file and export a color palette map

```scss
$dolomite-theme: (
  primary: (
    main: #3170a3, /* every color must have a `main` variant*/ 
    light: #5190c3 /* colors can have other variants*/
  ),
  secondary: (
    main: #dddddd,
    light: #f9f9f9
  ),
  textPrimary: (
    main: #333
  )
);

@include export-theme('dark', $dolomite-theme);
```

**NOTE**: In order for color variants to be consumed by the material-ui custom theme they must follow the patterns described in the material-ui documentation: https://material-ui.com/style/color/

Themse are automatically imported and registered from the `common/theme/themes` folder as long as they call `@include export-theme(<themeName>, <colorPalette>)`


### Using Colors in `SCSS`

To use the colors of the selected theme in other scss files throughout the project use the `color()` scss function

```scss
@import "../path/to/.../global-styles";

.component {
  background-color: color(secondary, light); // color(<name>, <variant>)
  border: 1px solid color(primary);          // color(<name>) => color(<name>, main)
  color: color(textPrimary);
}
```

### Using Colors in `React`

To use the colors of the selected theme throughout your react application, import `withThemeColors` from `DolomiteTheme.js`.

```javascript
import { withThemeColors } from '../path/to/.../common/theme/DolomiteTheme';
```

Example usage:

```javascript
{ withThemeColors(colors => (
  <div>
    <div style={{ backgroundColor: colors.primary.light }} />
    <div style={{ backgroundColor: colors.primary.main }} />
    <div style={{ backgroundColor: colors.primary.dark }} />
    
    <div style={{ backgroundColor: colors.secondary.light }} />
    <div style={{ backgroundColor: colors.secondary.main }} />
    <div style={{ backgroundColor: colors.secondary.dark }} />
  </div>
))}
```


## Style Material-UI Components

The Dolomite Theme is much more than just a change of colors, we restyle many of the material-ui components to fit our styleguide.

### Create an Override

You can do this by creating a new javascript file and exporting a new instance of an `Override`

```javascript
import { Override } from '../../core/OverrideHelper';

const styles = (forTheme, colors) => ({
  root: {
    // styles that every component of this type will have
    borderRadius: 3
  },
  raised: {
    // styles that only components with `variant="raised"` will have
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    // different values for different themes
    color: forTheme({
      dark: 'white',
      light: 'black'
    }),
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .30)"
  },
  outlined: {
    border: `1px solid ${colors.primary.main}` // use colors from the themes like so
  }
});

const props = forTheme => ({
  // default props for all components of this type
  disabled: false
});

export default new Override("MuiButton", styles, props);
```

In the example, `MuiButton` is the name of the material-ui component. These names can be found in the material-ui component API documentation. Notice how `styles` and `props` are both functions. `forTheme(<options>)` is a helper function intended to make further customization even easier. `colors` is the color palette for the theme being generated.

All scss files in `common/theme/components` that are an instance of `Override` will automatically be registered

## Usage

What's the point in creating a custom theme if it isn't being used, am I right? To use the theme, import the `DolomiteThemeProvider` and set it as the highest level component of the React app.

```javascript
import { DolomiteThemeProvider } from '../path/to/.../common/theme/DolomiteTheme';

<DolomiteThemeProvider>
  <Main />
</DolomiteThemeProvider>
```

## Changing the Theme

The theme is changed by the use of a function that provides a component with a function `changeTheme(<themeName>)`, done like so:

```javascript
import { dolomiteThemeDispatcher } from '../path/to/.../common/theme/DolomiteTheme';

// Button that will swap the theme
const SwapThemeButton = dolomiteThemeDispatcher(changeTheme => (
  <Button className={styles.changeTheme} onClick={() => changeTheme()}>
    Swap Theme
  </Button>
));
```

If the value given to `changeTheme` is null and there are only 2 registered themes, the button will switch between the two themes.

## That's It!
