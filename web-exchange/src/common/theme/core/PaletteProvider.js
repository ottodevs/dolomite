import ColorPalette from '../color-palette.scss';

/*
 * color-palette.scss calls (@includes) `export-color-palette()` (defined 
 * in core/palette-helper.scss) which outputs the JSON representation
 * of the color palette into the `content` attribute of body::before.
 * This function extracts the string json content of body::before and
 * parses it to JSON.
 */
function loadPaletteFromSCSS() {
  try {
    const content = window.getComputedStyle(
      document.querySelector('body'), ':before'
    ).getPropertyValue('content')
      .replace(/(^"|"$)/g, '') // remove enclosing double quotes
      .replace(/\\"/g, '"'); // remove all escaped quotes
    
    return JSON.parse(content);
  } catch (e) {
    return {};
  }
}

/*
 * Javascipt object representation of the scss map in color-palette.scss
 *
 * Usage: import { COLOR_PALETTE } from './path/to/.../PaletteProvider';
 *
 * NOTE: this should only be used internally by DolomiteTheme.js 
 * and OverrideHelper.js. Read the Theme ReadMe to learn how to use
 * colors in this project
 */
export const COLOR_PALETTE = loadPaletteFromSCSS();
