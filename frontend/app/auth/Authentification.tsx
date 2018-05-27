import React from 'react';
import { inject, observer } from 'mobx-react';

import { AuthStore } from 'app/core/stores/AuthStore';
import { Routes } from 'app/core/Routes';
import { LoginPage } from 'app/auth/LoginPage';

interface IProps {
  auth?: AuthStore;
}

@inject('auth')
@observer
class Authentification extends React.Component<IProps> {
  render() {
    if (!this.props.auth.isLogin || DEBUG) {
      return <Routes />;
    }

    return <LoginPage />;
  }
}

export { Authentification };
