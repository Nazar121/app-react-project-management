import React from 'react';
import { Routes, Route, RouteProps, Navigate } from 'react-router-dom';

// - Pages
import { DashboardPage } from '@pages/index';

export const ROUTES_PRIVATE = {
  DASHBOARD: '/dashboard',
};

const privateRoutes: RouteProps[] = [
  {
    path: ROUTES_PRIVATE.DASHBOARD,
    element: <DashboardPage />,
  },
];

export const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        {privateRoutes.map((route: RouteProps) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        <Route path="/" element={<Navigate to={ROUTES_PRIVATE.DASHBOARD} replace />} />
        <Route path="*" element={<Navigate to={ROUTES_PRIVATE.DASHBOARD} replace />} />
      </Routes>
    </>
  );
};
