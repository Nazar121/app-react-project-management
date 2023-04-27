import React from 'react';

// - MUI
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// - Components
import { AccountHeaderMenu } from './components/index';

interface Props {
  toggleDrawer: () => void;
}

export const AccountHeader = (props: Props) => {
  return (
    <AppBar
      color={'secondary'}
      sx={{
        width: '100%',
        margin: '0 !important',
        position: 'sticky',
      }}
    >
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={props?.toggleDrawer}>
          <MenuIcon />
        </IconButton>

        <div style={{ flexGrow: 1 }}>Responsive drawer</div>

        <AccountHeaderMenu></AccountHeaderMenu>
      </Toolbar>
    </AppBar>
  );
};
