import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './SettingsLayout.module.scss';

// - NUI
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Email, Person, Settings, Password } from '@mui/icons-material';

// - Routes
import { ROUTES } from '@routes/index';

// - Components
import { SettingsTitle } from '@components/index';

export const SettingsLayout = () => {
  return (
    <div className={styles.settings_layout}>
      <div className={styles.sidenav}>
        <SettingsTitle title="Settings"></SettingsTitle>

        <List>
          <NavLink to={ROUTES.USER_PROFILE}>
            <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </ListItemButton>
          </NavLink>

          <NavLink to={ROUTES.USER_ACCOUNT}>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText>Account</ListItemText>
            </ListItemButton>
          </NavLink>

          <NavLink to={ROUTES.USER_EMAIL}>
            <ListItemButton>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText>Email</ListItemText>
            </ListItemButton>
          </NavLink>

          <NavLink to={ROUTES.USER_PASSWORD}>
            <ListItemButton>
              <ListItemIcon>
                <Password />
              </ListItemIcon>
              <ListItemText>Password</ListItemText>
            </ListItemButton>
          </NavLink>
        </List>
      </div>

      <div className={styles.main}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
