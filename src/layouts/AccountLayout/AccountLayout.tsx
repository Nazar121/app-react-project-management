import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AccountLayout.module.scss';

// - Components
import { AccountHeader, AccountSidenav } from '@components/index';

export const AccountLayout = () => {
  const [drawer, setDrawer] = React.useState(true);
  const toggleDrawer = () => setDrawer(drawer ? false : true);

  return (
    <div className={styles.account_layout}>
      <div className={styles.sidenav}>
        <AccountSidenav drawer={drawer} setDrawer={setDrawer} toggleDrawer={toggleDrawer}></AccountSidenav>
      </div>

      <div className={styles.main}>
        <AccountHeader toggleDrawer={toggleDrawer}></AccountHeader>

        <div className={styles.outlet}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
