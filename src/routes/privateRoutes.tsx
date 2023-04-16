import React from 'react';
import { Routes, Route, RouteProps, Navigate } from 'react-router-dom';

// Layouts
import { AuthLayout } from '../components/layouts/AuthLayout/AuthLayout';

// Pages
import Login from '../pages/Login';

export const ROUTES_PRIVATE = {
  LOGIN: '/login',
};

const privateRoutes: RouteProps[] = [
  {
    path: ROUTES_PRIVATE.LOGIN,
    element: <Login />,
  },
];

export const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          {privateRoutes.map((route: RouteProps) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          <Route path="/" element={<Navigate to={ROUTES_PRIVATE.LOGIN} replace />} />
          <Route path="*" element={<Navigate to={ROUTES_PRIVATE.LOGIN} replace />} />
        </Route>
      </Routes>
    </>
  );
};
