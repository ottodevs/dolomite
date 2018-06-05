import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import styles from './Navbar.scss';
import { dolomiteThemeDispatcher } from '../../common/theme/DolomiteTheme';

const SwapThemeButton = dolomiteThemeDispatcher(changeTheme => (
  <Button className={styles.changetheme} onClick={() => changeTheme()}>
    Swap Theme
  </Button>
));

export const Navbar = props => (
  <nav>
    <h3 className={styles.title}>Navbar: {props.userName}</h3>

    {SwapThemeButton}
  </nav>
);

const mapStateToProps = state => ({
  userName: state.user.userName
});

Navbar.defaultProps = {
  userName: 'Default Name Navbar'
};

Navbar.propTypes = {
  userName: PropTypes.string
};

export default connect(mapStateToProps)(Navbar);
