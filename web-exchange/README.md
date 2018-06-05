# Dolomite Web Exchange

Repository for the dolomite web exchange. This project is built in React.js, if you are unfamiliar with React.js, read the [Getting Started with React Guide](docs/GettingStarted.md).

## Getting Started

### Installation

Clone the repository and navigate into the `web-exchange` directory

```shell
git clone https://github.com/dolomite-exchange/dolomite.git
cd dolomite/web-exchange
```

Download [npm (Node Package Manager)](https://npmjs.com) if you haven't already and run the following to download and install all of the dependencies for the web exchange

```
npm install
```

### Running

Starting up the React application is easy, simply run the following and navigate to `http://localhost:3000`

```shell
npm start
```

## Documentation

### Theme and Colors

Dolomite web exchange uses `material-ui` components and a custom theme to style these components and make them fit our style guidelines. The code for the Dolomite Custom Theme is in `src/common/theme` and for more information on how to override the styles of material-ui components in this project, reference the [Dolomite Theme README](src/common/theme/).

The web exchange also uses a color palette that is used by the material-ui custom theme, the react application and all of the scss files in the project. This color palette is defined in `src/common/theme/dolomite-color-palette.scss`.

Colors from the palette can be used in scss files by the function `color(<name>)` or `color(<name>, <variant>)`

```scss
@import '../path/to/.../global-styles';

color(primary)
color(secondary, light)
```

Colors from the scss palette can also be used in javascript through the use of `withThemeColors`

```javascript
import { withThemeColors } from '../path/to/.../common/theme/DolomiteTheme';

{ withThemeColors(colors => (
    <div style={{ backgroundColor: colors.primary.light }} />
))}
```
