import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// - Layouts
import { AccountLayout, SettingsLayout } from '@layouts/index';

// - Pages
import { DashboardPage, UserEmailPage, UserProfilePage, UserAccountPage, UserPasswordPage } from '@pages/index';

export const ROUTES_PRIVATE = {
  DASHBOARD: '/dashboard',
  SETTINGS: '/settings',
  USER_PROFILE: '',
  USER_ACCOUNT: '',
  USER_EMAIL: '',
  USER_PASSWORD: '',
};
ROUTES_PRIVATE.USER_PROFILE = `${ROUTES_PRIVATE?.SETTINGS}/profile`;
ROUTES_PRIVATE.USER_ACCOUNT = `${ROUTES_PRIVATE?.SETTINGS}/account`;
ROUTES_PRIVATE.USER_EMAIL = `${ROUTES_PRIVATE?.SETTINGS}/email`;
ROUTES_PRIVATE.USER_PASSWORD = `${ROUTES_PRIVATE?.SETTINGS}/password`;

export const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AccountLayout />}>
          <Route path={ROUTES_PRIVATE.DASHBOARD} element={<DashboardPage />}></Route>
          <Route path={ROUTES_PRIVATE.SETTINGS} element={<SettingsLayout />}>
            <Route path={ROUTES_PRIVATE.USER_PROFILE} element={<UserProfilePage />}></Route>
            <Route path={ROUTES_PRIVATE.USER_ACCOUNT} element={<UserAccountPage />}></Route>
            <Route path={ROUTES_PRIVATE.USER_EMAIL} element={<UserEmailPage />}></Route>
            <Route path={ROUTES_PRIVATE.USER_PASSWORD} element={<UserPasswordPage />}></Route>
          </Route>

          <Route path="/" element={<Navigate to={ROUTES_PRIVATE.DASHBOARD} replace />} />
          <Route path="*" element={<Navigate to={ROUTES_PRIVATE.DASHBOARD} replace />} />
        </Route>
      </Routes>
    </>
  );
};
