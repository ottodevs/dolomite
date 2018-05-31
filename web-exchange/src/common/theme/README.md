# Custom Material-UI Theme

Dolomite relies on [Material-UI](https://github.com/mui-org/material-ui) for the majority of it's components. We use a Material-UI [custom theme](https://material-ui.com/customization/themes/) to add our own look to these components. We have provided helper classes/functions to make the customization of Material-UI components quick, intuitive and easy.

## Create a Color Palette

In the `palette.js` file, create and export a palette hash. More information can be found in the [material-ui documentation](https://material-ui.com/customization/themes/#palette)

```javascript
const palette = {
  primary: {
    // light: will be calculated from palette.primary.main,
    main: '#3170A3',
    // dark: will be calculated from palette.primary.main,
  },
  secondary: {
    main: '#909'
  },
};

export default palette;
```

## Create an Override

You can do this by creating a new javascript file and exporting a new instance of an `Override`. Example:

```javascript
import Override from '../../core/Override';
import colors from '../../core/ThemeColors';

const styles = {
  root: {
    // styles that every component of this type will have
    borderRadius: 3,
  },
  raised: {
    // styles that only components with `variant="raised"` will have
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
  outlined: {
    border: `1px solid ${colors.primary.main}`, // use colors from palette.js like so
  }
};

const props = {
  // default props for all components of this type
  disabled: false,
};

/*
 * Dolomite Style for Button
 * API reference: https://material-ui.com/api/button
 */
export default new Override('MuiButton', styles, props);
```
In the example, `MuiButton` is the name of the Material-UI component. These names can be found in the Material-UI component API documentation.

## Register the Override

In the `overrides.js` file...

```javascript
// (1) Import overridden components
import Button from './components/Buttons/Button';
import Input from './components/Inputs/Input';

// (2) Register overridden components
const overrides = [
  Button,
  Input
];

export default overrides;
```

#### That's it!
