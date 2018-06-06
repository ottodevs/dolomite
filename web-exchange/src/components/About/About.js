import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '@material-ui/core/Button';

import styles from './About.scss';
import { withThemeColors } from '../../common/theme/DolomiteTheme';

const HomeLink = props => <Link to="/" {...props} />;

const About = (props) => {
  const buttonLink = props.shouldLinkHome ? (
    <Button variant="raised" color="primary" component={HomeLink}>
      Head back home
    </Button>
  ) : (
    <div />
  );

  return (
    <div>
      <h1>
        Welcome to the About Page (and by the way, <b>Routing Works!</b>)
      </h1>
      <h3>Here is our team:</h3>
      <ul>
        <li>Founders: Corey Caplan &amp; Adam Knuckey</li>
        <li>Marketing: Rene Molinari</li>
        <li>Engineering Manager: Jordan Cutler</li>
        <li>
          Frontend Engineers: Sam Rogalsky, Zack Rubenstein, and Kai Masters
        </li>
        <li>Backend Engineers: Gregory Cheng &amp; Matthew Herwig</li>
      </ul>

      <h3>Here is our color palette:</h3>
      <h5>Using JS</h5>

      <div>
        <div className={styles['about-color-palette-row']}>
          <div style={{ backgroundColor: props.colors.primary.light }} />
          <div style={{ backgroundColor: props.colors.primary.main }} />
          <div style={{ backgroundColor: props.colors.primary.dark }} />
        </div>
        <div className={styles['about-color-palette-row']}>
          <div style={{ backgroundColor: props.colors.secondary.light }} />
          <div style={{ backgroundColor: props.colors.secondary.main }} />
          <div style={{ backgroundColor: props.colors.secondary.dark }} />
        </div>
      </div>

      <h5>Using SCSS</h5>
      <div className={styles['about-color-palette-row']}>
        <div className={styles['color-box-1']} />
        <div className={styles['color-box-2']} />
        <div className={styles['color-box-3']} />
      </div>
      <div className={styles['about-color-palette-row']}>
        <div className={styles['color-box-4']} />
        <div className={styles['color-box-5']} />
        <div className={styles['color-box-6']} />
      </div>

      <br />
      <br />

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

export default withThemeColors(About);
