import React from 'react';
import { Redirect } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const token = window.localStorage.getItem('token');

  return token ? children : <Redirect to="/" />;
};
