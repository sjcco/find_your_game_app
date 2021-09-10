import React from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
  auth, component: Component, path, redirect,
}) => (
  <Route
    path={path}
    render={() => (auth ? (
      <Component />
    )
      : <Redirect to={redirect} />)}
  />
);

ProtectedRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  component: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default ProtectedRoute;
