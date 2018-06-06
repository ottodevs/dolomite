import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './Navbar.scss';
import logo from '../../assets/DolomiteLogoCircle.png';
import ChangeTheme from './Settings/ChangeTheme';
import * as routes from '../Main/Routes.js';

const MENU_OPTIONS = {
  Exchange: routes.EXCHANGE,
  Wallet: routes.WALLET
};

export class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location
    };
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen(location => {
      this.setState({ location });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const selectedTab = Object.values(MENU_OPTIONS).indexOf(
      this.state.location.pathname
    );

    return (
      <nav>
        <div className={styles.leftNav}>
          <img src={logo} className={styles.logo} alt="" />
          <h1 className={styles.title}>Dolomite</h1>
        </div>

        <div className={styles.centerNavSpaceLeft} />

        <div className={styles.centerNav}>
          <Tabs
            action={actions => setTimeout(actions.updateIndicator(actions), 0)}
            value={selectedTab}
            classes={{ flexContainer: styles.tabFlex }}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {Object.keys(MENU_OPTIONS).map(label => (
              <Tab label={label} component={Link} to={MENU_OPTIONS[label]} />
            ))}
          </Tabs>
        </div>

        <div className={styles.centerNavSpaceRight} />

        <div className={styles.rightNav}>
          <ChangeTheme />
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  history: ReactRouterPropTypes.history.isRequired, // eslint-disable-line react/no-typos
  location: ReactRouterPropTypes.location.isRequired // eslint-disable-line react/no-typos
};

export default withRouter(Navbar);
