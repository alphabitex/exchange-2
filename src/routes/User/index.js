import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Menu, Dropdown, Icon } from 'antd';
import { getFlag } from 'utils';

import styles from './user.less';

class User extends PureComponent {
  dispatch = this.props.dispatch;

  handleSwitchLanguage = ({ key }) => {
    this.dispatch({
      type: 'global/switchLanguage',
      payload: { language: key }
    });
  };

  render() {
    const { language, localization } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link to="/signin">{localization['登录']}</Link>
          <Link to="/signup">{localization['注册']}</Link>
          <Dropdown
            overlay={
              <Menu onClick={this.handleSwitchLanguage}>
                <Menu.Item key="zh_CN">{getFlag('zh_CN')}</Menu.Item>
                <Menu.Item key="en_US">{getFlag('en_US')}</Menu.Item>
              </Menu>
            }
          >
            <span className={('ant-dropdown-link', styles.language)}>
              {getFlag(language)}
              <Icon type="down" />
            </span>
          </Dropdown>
          <Button onClick={() => this.props.history.push('/')}>{localization['返回首页']}</Button>
          <main>{this.props.children}</main>
        </div>
      </div>
    );
  }
}

export default withRouter(User);
