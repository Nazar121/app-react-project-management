import React from 'react';
import { Routes, Route, RouteProps, Navigate } from 'react-router-dom';

// Layouts
import { AuthLayout } from '@layouts/index';

// Pages
import { LoginPage, RegisterPage } from '@pages/index';

export const ROUTES_PRIVATE = {
  LOGIN: '/login',
  REGISTER: 'register',
};

const privateRoutes: RouteProps[] = [
  {
    path: ROUTES_PRIVATE.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES_PRIVATE.REGISTER,
    element: <RegisterPage />,
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
