/*
 * component-overrides.js
 *
 * Import your override objects/files and then add them to the exported array
 *
 * Material-UI API reference: https://material-ui.com/customization/themes/
 */

// (1) Import overridden components
import Button from './components/Buttons/Button';
import Input from './components/Inputs/Input';

// (2) Register overridden components
const COMPONENT_OVERRIDES = [
  Button,
  Input
];

export default COMPONENT_OVERRIDES;
