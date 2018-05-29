import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </main>
);

export default Main;
