import React from 'react';
import cookies from 'react-cookies';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';

import styles from './ChangeTheme.scss';
import { dolomiteThemeDispatcher } from '../../../common/theme/DolomiteTheme';
import * as themes from '../../../common/theme/themes/index';

export class ChangeTheme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkTheme:
        cookies.load(themes.SELECTED) === null ||
        cookies.load(themes.SELECTED) === themes.DARK
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <Tooltip title="Change Theme">
          {dolomiteThemeDispatcher(changeTheme => (
            <Switch
              checked={this.state.darkTheme}
              onChange={() => {
                this.setState({ darkTheme: !this.state.darkTheme });
                changeTheme();
              }}
              classes={{
                switchBase: styles.switch,
                checked: styles.switchchecked
              }}
            />
          ))}
        </Tooltip>
      </div>
    );
  }
}

export default ChangeTheme;
