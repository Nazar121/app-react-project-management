import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './AuthHeader.module.scss';

// - Routes
import { ROUTES } from '@routes/index';

// - Components
import { CustomButton } from '@components/index';

// - Images
import AuthLogo from '@assets/images/auth/auth-logo.jpg';

export const AuthHeader = () => {
  const pathname = useLocation()?.pathname || '';

  return (
    <header className={styles.authHeader}>
      <div className={styles.logo}>
        <img src={AuthLogo} alt="AuthLogo" />
      </div>
      <nav className={styles.nav}>
        {pathname === ROUTES.LOGIN && (
          <div className={styles.navItem}>
            <span>Already playing with ClickUp?</span>
            <NavLink to={ROUTES.REGISTER}>
              <CustomButton>Register</CustomButton>
            </NavLink>
          </div>
        )}
        {pathname === ROUTES.REGISTER && (
          <div className={styles.navItem}>
            <span>Don't have an account?</span>
            <NavLink to={ROUTES.LOGIN}>
              <CustomButton>Login</CustomButton>
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};
