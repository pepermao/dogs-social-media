import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';
import BASE_URL from '../../../BASE_URL';

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);
  return login ? children : <Navigate to={`/${BASE_URL}/login`} />;
};

export default ProtectedRoute;
