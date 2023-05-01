import React, { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

// - MUI
import { AppBar, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Dashboard, Settings } from '@mui/icons-material';

// - Routes
import { ROUTES } from '@routes/index';

// - Hooks
import { useWindowDimensions } from '@hooks/index';

interface Props {
  drawer: boolean;
  setDrawer: Dispatch<SetStateAction<boolean>>;
  toggleDrawer: () => void;
}

export const AccountSidenav = (props: Props) => {
  const { width: windowWidth } = useWindowDimensions();
  const widthDrawer = 250;

  return (
    <Drawer
      variant={windowWidth > 600 ? 'persistent' : 'temporary'}
      anchor={'left'}
      open={props?.drawer}
      onClose={props?.toggleDrawer}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        width: props?.drawer ? widthDrawer : 0,
        transition: 'width 0.15s ease-in-out',
        '& .MuiDrawer-paper': {
          width: 'inherit',
          transition: 'width 0.15s ease-in-out',
        },
      }}
    >
      <AppBar
        color={'secondary'}
        sx={{
          width: '100%',
          margin: '0 !important',
          position: 'sticky',
        }}
      >
        <Toolbar>LOGO</Toolbar>
      </AppBar>

      <Divider />

      <List>
        <NavLink to={ROUTES.DASHBOARD}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to={ROUTES.SETTINGS}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>

      <Divider />
    </Drawer>
  );
};
