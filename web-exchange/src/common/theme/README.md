# Custom Material-UI Theme

Dolomite relies on [material-ui](https://github.com/mui-org/material-ui) for the majority of it's components. We use a material-ui [custom theme](https://material-ui.com/customization/themes/) to add our own look to these components. We have provided helper classes/functions to make the customization of material-ui components quick, intuitive and easy.

## Color Palette

In the `color-palette.scss` file, create and export a palette map

```scss
@import "core/palette-helper.scss";

$color-palette: (
  primary: (
    main: #3170a3, /* every color must have a `main` variant*/ 
    light: #5190c3 /* colors can have other variants (*)*/
  ),
  secondary: (
    main: #dddddd,
    light: #f9f9f9
  ),
  textPrimary: (
    main: #333
  )
);

@include export-color-palette($color-palette);
```

**\*NOTE**: In order for color variants to be consumed by the material-ui custom theme they must follow the patterns described in the material-ui documentation: https://material-ui.com/style/color/

### Using Colors in `SCSS`

To use the colors defined in `color-palette.scss` in other scss files throughout the project use the `color()` scss function

```scss
@import "../path/to/.../global-styles";

.component {
  background-color: color(secondary, light); // color(<name>, <variant>)
  border: 1px solid color(primary); // color(<name>) => color(<name>, main)
  color: color(textPrimary);
}
```

### Using Colors in `React`

To use the custom colors you define in `color-palette.scss` throughout your react application, import `DolomiteColors` from `DolomiteTheme.js`.

```javascript
import { DolomiteColors as colors } from '../path/to/.../common/theme/DolomiteTheme';

colors.primary.main => "#3170A3"
colors.primary.light => "#3170A3"
colors.secondary.main => "#dddddd"
```

**NOTE**: In this example we alias DolomiteColors to `colors` to make it easier to work with. We reccomend that you do the same.

## Style Material-UI Components

The Dolomite Theme is much more than just a change of colors, we restyle many of the material-ui components to fit our styleguide.

### Create an Override

You can do this by creating a new javascript file and exporting a new instance of an `Override`

**All files in the `common/theme/components` that are an instance of `Override` will automatically be registered**

```javascript
import { Override, BaseColorProvider as colors } from "../../core/OverrideHelper";

const styles = {
  root: {
    // styles that every component of this type will have
    borderRadius: 3
  },
  raised: {
    // styles that only components with `variant="raised"` will have
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .30)"
  },
  outlined: {
    border: `1px solid ${colors.primary.main}` // use colors from palette.js like so
  }
};

const props = {
  // default props for all components of this type
  disabled: false
};

export default new Override("MuiButton", styles, props);
```

In the example, `MuiButton` is the name of the material-ui component. These names can be found in the material-ui component API documentation.

**NOTE:** Overrides don't use `DolomiteColors` from `DolomiteTheme.js` as the `OverrideHelper` that provides the `Override` class also provides colors with `BaseColorProvider`, which should be aliased to `colors` for ease of use.

## Usage

What's the point in creating a custom theme if it isn't being used, am I right? To use the theme, import the `DolomiteThemeProvider` and set it as the highest level component of the React app.

```javascript
import { DolomiteThemeProvider } from "./common/theme/DolomiteTheme";

<DolomiteThemeProvider>
  <Main />
</DolomiteThemeProvider>
```

## That's It!
