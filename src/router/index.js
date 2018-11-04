import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Login from './Login';
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
            <div>{JSON.stringify(process.env, null, 4)}</div>
          </div>
        )}
      />
      <Route path={'/login'} component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
