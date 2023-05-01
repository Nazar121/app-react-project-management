import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './SettingsLayout.module.scss';

// - NUI
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Email, Person, Settings } from '@mui/icons-material';

// - Routes
import { ROUTES } from '@routes/index';

export const SettingsLayout = () => {
  return (
    <div className={styles.settings_layout}>
      <div className={styles.sidenav}>
        <ListItemButton disableRipple>
          <ListItemText>Settings</ListItemText>
        </ListItemButton>

        <Divider />

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
        </List>
      </div>

      <div className={styles.main}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
