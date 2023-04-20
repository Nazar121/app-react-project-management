import React from 'react';
import { Routes, Route, RouteProps, Navigate } from 'react-router-dom';

// Layouts
import { AuthLayout } from '@layouts/index';

// Pages
import { LoginPage, RegisterPage } from '@pages/index';

export const ROUTES_PUBLIC = {
  LOGIN: '/login',
  REGISTER: '/register',
};

const publicRoutes: RouteProps[] = [
  {
    path: ROUTES_PUBLIC.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES_PUBLIC.REGISTER,
    element: <RegisterPage />,
  },
];

export const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          {publicRoutes.map((route: RouteProps) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          <Route path="/" element={<Navigate to={ROUTES_PUBLIC.LOGIN} replace />} />
          <Route path="*" element={<Navigate to={ROUTES_PUBLIC.LOGIN} replace />} />
        </Route>
      </Routes>
    </>
  );
};
