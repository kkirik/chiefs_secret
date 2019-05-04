import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { Icon, Spin } from 'antd';

import { LoginForm } from 'app/auth/LoginForm';
import { authStore } from 'app/core/App';
import { loginBackgroundCss, loginBackgroundLoadingCss, Spinner } from 'app/core/styled/general';

@observer
class LoginPage extends React.Component {
  render() {
    const { loading } = authStore;

    return (
      <Fragment>
        {loading && (
          <Spinner>
            <Spin size="large" indicator={<Icon type="loading" spin />} />
          </Spinner>
        )}
        <div
          className={`login-background-css
            ${loginBackgroundCss}
            ${loading && loginBackgroundLoadingCss}`}
        >
          <LoginForm onSave={authStore.login} />
        </div>
      </Fragment>
    );
  }
}

export { LoginPage };
