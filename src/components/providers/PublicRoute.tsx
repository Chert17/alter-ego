import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

export const PublicRoute = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);
  return !isAuth ? <Outlet /> : <Navigate to="/profile" />;
};
