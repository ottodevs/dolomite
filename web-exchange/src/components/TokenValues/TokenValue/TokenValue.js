import React from 'react';
import PropTypes from 'prop-types';

const TokenValue = (props) => {
  if (props.token && props.usdValue) {
    return (
      <React.Fragment>
        <h3>{props.token}: {props.usdValue}</h3>
      </React.Fragment>
    );
  }
  return <div />;
};

TokenValue.defaultProps = {
  token: '',
  usdValue: ''
};

TokenValue.propTypes = {
  token: PropTypes.string,
  usdValue: PropTypes.number,
};

export default TokenValue;
