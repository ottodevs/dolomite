import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Navbar = props => (
  <nav>
    <h3>Navbar: {props.userName}</h3>
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


export default connect(
  mapStateToProps,
)(Navbar);
