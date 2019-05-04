import React from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';

import { LoginPage } from 'app/auth/LoginPage';
import { DishesPage } from 'app/dishes/DishesPage';
import { RouterStore } from 'mobx-react-router';

interface IProps {
  router?: RouterStore;
}

export const Routes: React.SFC<IProps> = inject('router')(
  observer((props) => (
    <Switch location={props.router.location}>
      <Route exact path="/" component={DishesPage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  )),
);
