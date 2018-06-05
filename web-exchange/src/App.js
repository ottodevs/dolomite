import React from 'react';

import { DolomiteThemeProvider } from './common/theme/DolomiteTheme';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <DolomiteThemeProvider>
    <Navbar />
    <Main />
  </DolomiteThemeProvider>
);

export default App;
