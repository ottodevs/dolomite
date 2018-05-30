import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider } from '@material-ui/core/styles';

import DolomiteTheme from './common/theme/DolomiteTheme';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <MuiThemeProvider theme={DolomiteTheme.generate()} >
    <Grid container spacing={16} style={{ paddingLeft: 20, paddingRight: 20, overflowX: 'hidden' }}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Main />
      </Grid>
    </Grid>
  </MuiThemeProvider>
);

export default App;
