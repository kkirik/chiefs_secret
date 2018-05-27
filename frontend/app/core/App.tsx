import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import { Authentification } from 'app/auth/Authentification';
import { AuthStore } from 'app/core/stores/AuthStore';

export const routerStore = new RouterStore();
export const authStore = new AuthStore();

const browserHistory = createBrowserHistory({ basename: '/' });
const history = syncHistoryWithStore(browserHistory, routerStore);

class App extends React.Component {
  render() {
    const stores = {
      auth: authStore,
      router: routerStore,
    };

    return (
      <Provider {...stores}>
        <Router history={history}>
          <Authentification />
        </Router>
      </Provider>
    );
  }
}

export default App;
