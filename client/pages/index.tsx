import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Booking from './Booking';
import School from './School';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={School} />
    <Route path="/:id" component={Booking} />
    <Redirect to="/" />
  </Switch>
);
