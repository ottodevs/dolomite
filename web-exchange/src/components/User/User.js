import React from 'react';
import PropTypes from 'prop-types';

const User = props => (
  <React.Fragment>
    <h2>Hi, {props.userName}!</h2>
  </React.Fragment>
);

User.defaultProps = {
  userName: 'Default name'
};

User.propTypes = {
  userName: PropTypes.string
};

export default User;
