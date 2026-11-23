import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './auth-helper.js';

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  return auth.isAuthenticated() ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
