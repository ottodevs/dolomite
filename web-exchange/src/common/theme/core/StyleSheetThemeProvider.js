/*
 * The SCSS themes hash is rendered in the `content` of
 * body::before as JSON. This reads and parses the themes
 */
function getThemeJsonFromScss() {
  try {
    const content = window
      .getComputedStyle(document.querySelector('body'), ':before')
      .getPropertyValue('content')
      .replace(/(^"|"$)/g, '') // remove enclosing double quotes
      .replace(/\\"/g, '"'); // remove all escaped quotes

    return JSON.parse(content);
  } catch (e) {
    return {};
  }
}

/*
 * Javascipt object representation of the themes built in `.themes.scss`
 */
export const SCSS_THEMES = getThemeJsonFromScss();

/*
 * Converts color palette to associative array in the format "color-variant" : <style>
 */
function encodeToCssVariables(colors) {
  const colorNames = Object.keys(colors);
  const variables = {};

  for (let i = 0; i < colorNames.length; i += 1) {
    const color = colorNames[i];
    if (typeof colors[color] === 'object') {
      const variantNames = Object.keys(colors[color]);

      for (let b = 0; b < variantNames.length; b += 1) {
        if (typeof colors[color][variantNames[b]] !== 'object') {
          variables[`${color}-${variantNames[b]}`] =
            colors[color][variantNames[b]];
        }
      }
    }
  }

  return variables;
}

/*
 * Change the theme color palette in the page's scss/css
 */
export function setCssColors(colors) {
  const variables = encodeToCssVariables(colors);
  const variableNames = Object.keys(variables);
  const anchor = document.getElementsByTagName('html')[0];

  for (let i = 0; i < variableNames.length; i += 1) {
    const variable = variableNames[i];
    anchor.style.setProperty(`--${variable}`, variables[variable]);
  }
}
