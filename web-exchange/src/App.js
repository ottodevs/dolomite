import React from 'react';
import Grid from '@material-ui/core/Grid';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <Grid container spacing={16} style={{ paddingLeft: 20, paddingRight: 20, overflowX: 'hidden' }}>
    <Grid item xs={12}>
      <Navbar />
    </Grid>
    <Grid item xs={12}>
      <Main />
    </Grid>
  </Grid>
);

export default App;
