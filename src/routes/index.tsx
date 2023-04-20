import React from 'react';
import { PrivateRoutes, ROUTES_PRIVATE } from './privateRoutes';
import { PublicRoutes, ROUTES_PUBLIC } from './publicRoutes';

// - Hooks
import { useReduxSelector } from '@hooks/index';

export const ROUTES = {
  ...ROUTES_PRIVATE,
  ...ROUTES_PUBLIC,
};

export const AppRoutes = () => {
  const { authUser } = useReduxSelector(state => state.auth);

  return <>{authUser ? <PrivateRoutes></PrivateRoutes> : <PublicRoutes></PublicRoutes>}</>;
};
