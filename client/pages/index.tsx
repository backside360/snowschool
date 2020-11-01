import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Booking from './Booking';
import Coach from './Coach';
import School from './School';
import Login from './Login';
import { PrivateRoute } from '../containers/PrivateRoute';

/**
 * isAuth ? : ()
 */
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={School} />
    <Route path="/login" component={Login} />
    <Route
      path="/coach"
      render={() => (
        <PrivateRoute>
          <Coach />
        </PrivateRoute>
      )}
    />
    <Route path="/booking/:id" component={Booking} />
    <Redirect to="/" />
  </Switch>
);
