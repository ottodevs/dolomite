import { Route } from 'react-router-dom';
import React from 'react';
import Exchange from '../Exchange/Exchange';
import Wallet from '../Wallet/Wallet';

import styles from './Main.scss';
import * as routes from './Routes.js';

const Main = () => (
  <main className={styles.main}>
    <Route exact path={routes.EXCHANGE} component={Exchange} />
    <Route exact path={routes.WALLET} component={Wallet} />
  </main>
);

export default Main;
