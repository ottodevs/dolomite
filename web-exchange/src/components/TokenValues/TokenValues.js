import PropTypes from 'prop-types';
import React from 'react';
import TokenValue from './TokenValue/TokenValue';
import withTokenInfo from '../../common/hoc/withTokenInfo';

export const TokenValues = (props) => {
  const tokens = Object.keys(props.tokenToUsd);
  const tokenValues = tokens.map(token => (
    <TokenValue
      key={token}
      token={token}
      usdValue={props.tokenToUsd[token].USD}
    />
  ));

  return (
    <React.Fragment>
      {tokenValues}
    </React.Fragment>
  );
};

TokenValues.defaultProps = {
  tokenToUsd: {}
};

TokenValues.propTypes = {
  tokenToUsd: PropTypes.objectOf(PropTypes.shape({ USD: PropTypes.number }))
};

export default withTokenInfo(TokenValues);
