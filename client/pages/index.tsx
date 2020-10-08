import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Booking from './Booking';
import Coach from './Coach';
import School from './School';

// /coach
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={School} />
    <Route path="/coach" component={Coach} />
    <Route path="/:id" component={Booking} />
    <Redirect to="/" />
  </Switch>
);
