import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './About.scss';

const HomeLink = props => <Link to="/" {...props} />;

const About = (props) => {
  const buttonLink = props.shouldLinkHome ?
    <Button variant="raised" color="primary" component={HomeLink}>Head back home</Button> :
    <div />;

  return (
    <div className={styles['left-spacing']}>
      <h1>Welcome to the About Page (and by the way, <b>Routing Works!</b>)</h1>
      <h3>Here is our team:</h3>
      <ul>
        <li>Founders: Corey Caplan &amp; Adam Knuckey</li>
        <li>Marketing: Rene Molinari</li>
        <li>Project Manager: Jordan Cutler</li>
        <li>Frontend Engineers: Sam Rogalsky, Zack Rubenstein, and Kai Masters</li>
        <li>Backend Engineers: Gregory Cheng &amp; Matthew Herwig</li>
      </ul>

      {buttonLink}

    </div>
  );
};

About.defaultProps = {
  shouldLinkHome: true
};

About.propTypes = {
  shouldLinkHome: PropTypes.bool
};

export default About;
