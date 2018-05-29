import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import logo from '../../assets/DolomiteLogoCircle.png';
import styles from './Home.scss';
import TokenValues from '../TokenValues/TokenValues';
import withTokenInfo from '../../common/hoc/withTokenInfo';
import * as userActionCreators from '../../redux-store/actions/action-creators/user-action-creators';

const AboutPageLink = props => <Link to="/about" {...props} />;


export class Home extends React.Component {
  onKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      this.props.updateUserName(ev.target.value);
      ev.preventDefault();
    }
  };

  render() {
    return (
      <div className={styles.home}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1 className={styles.title}>
          Welcome to the Dolomite Web Exchange, {this.props.userName}!
        </h1>
        <h2>Here are the values of tokens in USD</h2>
        <TokenValues tokenToUsd={this.props.tokenToUsd} />
        <TextField
          label="Your Name"
          onKeyPress={ev => this.onKeyPress(ev)}
        />
        <br /><br />
        <Button variant="raised" color="primary" component={AboutPageLink}>About Page</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.user.userName
});

const mapDispatchToProps = dispatch => ({
  updateUserName: userName => dispatch(userActionCreators.updateUserName(userName))
});

Home.defaultProps = {
  userName: 'Default name',
  tokenToUsd: {},
  updateUserName: () => {}
};

Home.propTypes = {
  userName: PropTypes.string,
  tokenToUsd: PropTypes.objectOf(PropTypes.shape({ USD: PropTypes.number })),
  updateUserName: PropTypes.func
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTokenInfo
)(Home);
