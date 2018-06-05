import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import styles from "./Navbar.scss";
import { withThemeChanger } from "../../common/theme/DolomiteTheme";

export const Navbar = props => (
  <nav>
    <h3 className={styles.title}>Navbar: {props.userName}</h3>

    <Button
      className={styles.changetheme}
      onClick={() => props.requestThemeChange()}
    >
      Swap Theme
    </Button>
  </nav>
);

const mapStateToProps = state => ({
  userName: state.user.userName
});

Navbar.defaultProps = {
  userName: "Default Name Navbar"
};

Navbar.propTypes = {
  userName: PropTypes.string
};

export default connect(mapStateToProps)(withThemeChanger(Navbar));
