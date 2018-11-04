import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Login from './Login';
import Authenticate from './Authenticate';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path={'/'}
        render={() => (
          <div>
            <div>Home</div>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </div>
        )}
      />
      <Route path={'/authenticate'} component={Authenticate} />
      <Route path={'/login'} component={Login} />
      <Route
        path={'/dashboard'}
        render={() => (
          <div>
            dashboard
            {localStorage.getItem('github')}
          </div>
        )}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
