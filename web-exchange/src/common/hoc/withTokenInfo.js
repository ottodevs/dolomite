import { connect } from 'react-redux';
import React from 'react';

/*
This HOC allows you to wrap a component and automatically get
the tokenToUsd props from the redux store passed into props
 */
const withTokenInfo = WrappedComponent => {
  const WithTokenInfo = class extends React.Component {
    componentDidMount() {
      // fetch data and stuff
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  const mapStateToProps = state => ({
    tokenToUsd: state.token.tokenToUsd
  });

  const mapDispatchToProps = {
    // your shared action call
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithTokenInfo);
};

export default withTokenInfo;
