import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './Navbar.scss';
import logo from '../../assets/DolomiteLogoCircle.png';
import ChangeTheme from './Settings/ChangeTheme';
import * as routes from '../Main/Routes.js';

const OPTIONS = {
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
    this.unlisten = this.props.history.listen((location) => {
      this.setState({ location });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <nav>
        <div className={styles.leftnav}>
          <img src={logo} className={styles.logo} alt="" />
          <h1 className={styles.title}>Dolomite</h1>
        </div>

        <div className={styles.centernavspaceleft} />

        <div className={styles.centernav}>
          <Tabs
            action={actions => setTimeout(actions.updateIndicator(actions), 0)}
            value={Object.values(OPTIONS).indexOf(this.state.location.pathname)}
            classes={{ flexContainer: styles.tabflex }}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {Object.keys(OPTIONS).map(label => (
              <Tab label={label} component={Link} to={OPTIONS[label]} />
            ))}
          </Tabs>
        </div>

        <div className={styles.centernavspaceright} />

        <div className={styles.rightnav}>
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
