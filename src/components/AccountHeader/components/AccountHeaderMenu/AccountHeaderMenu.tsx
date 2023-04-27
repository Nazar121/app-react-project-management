import React from 'react';

// - MUI
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { Logout, Settings, Person } from '@mui/icons-material';

// - Hooks
import { useReduxActions } from '@hooks/index';

export const AccountHeaderMenu = () => {
  const { logout } = useReduxActions();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <Tooltip title="Open settings">
        <IconButton size="large" aria-label="account of current user" aria-controls="account-menu" aria-haspopup="true" onClick={handleMenu} color="inherit">
          <Avatar sx={{ width: 32, height: 32 }}></Avatar>
        </IconButton>
      </Tooltip>

      <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorEl} keepMounted anchorOrigin={{ vertical: 'top', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        <Divider />

        <MenuItem onClick={() => logout()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
