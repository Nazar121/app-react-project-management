import React from 'react';

// - Components
import { CustomButton } from '@components/index';

// - Hooks
import { useReduxActions } from '@hooks/index';

export const DashboardPage = () => {
  const { logout } = useReduxActions();

  return (
    <div>
      <h1>DashboardPage</h1>
      <CustomButton onClick={() => logout()}>Logout</CustomButton>
    </div>
  );
};
