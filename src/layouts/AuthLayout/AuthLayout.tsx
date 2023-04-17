import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.scss';

// - Components
import { AuthHeader } from '@components/index';

export const AuthLayout = () => {
  return (
    <div className={styles.authLayout}>
      <AuthHeader></AuthHeader>

      <main className={styles.main}>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
