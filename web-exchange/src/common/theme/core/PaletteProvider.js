/*
 * The SCSS color palette hash is stored in the `content` of 
 * body::before as JSON. This reads and parses the color palette
 */
function readPaletteFromSCSS() {
  try {
    const content = window
      .getComputedStyle(document.querySelector("body"), ":before")
      .getPropertyValue("content")
      .replace(/(^"|"$)/g, "") // remove enclosing double quotes
      .replace(/\\"/g, '"'); // remove all escaped quotes

    return JSON.parse(content);
  } catch (e) {
    return {};
  }
}

/*
 * Javascipt object representation of the scss map in color-palette.scss
 */
export const COLOR_PALETTE = readPaletteFromSCSS();
