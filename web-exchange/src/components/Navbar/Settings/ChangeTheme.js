import React from 'react';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';

import store from '../../../redux-store/store';
import styles from './ChangeTheme.scss';
import { withThemeChanger } from '../../../common/theme/DolomiteTheme';
import * as themes from '../../../common/theme/themes/index';

export class ChangeTheme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkTheme: store.getState().theme.theme === themes.DARK
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <Tooltip title="Change Theme">
          <Switch
            checked={this.state.darkTheme}
            onChange={() => {
              this.setState({ darkTheme: !this.state.darkTheme });
              this.props.requestThemeChange();
            }}
            classes={{
              switchBase: styles.switch,
              checked: styles.switchchecked
            }}
          />
        </Tooltip>
      </div>
    );
  }
}

export default withThemeChanger(ChangeTheme);
