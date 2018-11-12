import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthRouter from './AuthRouter';
import NotFound from './NotFound';

import Explorer from './Explorer';

import { AppNavbar, MarketingNavbar } from '../components';

const Guest = () => <div>Welcome, Guest</div>;

const Authenticated = () => <div>Welcome, User</div>;

const Router = () => (
  <BrowserRouter>
    <AuthRouter
      guest={() => (
        <Fragment>
          <MarketingNavbar />
          <Switch>
            <Route exact path={'/'} component={Guest} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      )}
      authenticated={() => (
        <Fragment>
          <AppNavbar />
          <Switch>
            <Route exact path={'/'} component={Authenticated} />
            <Route exact path={'/:username/:repository'} component={Explorer} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      )}
    />
  </BrowserRouter>
);

export default Router;
