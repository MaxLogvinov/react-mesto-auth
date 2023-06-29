import * as React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, element: Component, ...props }) => {
  return <Component {...props} />;
};

export default ProtectedRoute;

// isLoggedIn ? <Component {...props} /> : <Navigate to="/sign-in" replace />;
