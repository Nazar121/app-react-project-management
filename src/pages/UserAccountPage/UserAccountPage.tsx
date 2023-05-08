import React from 'react';

// - Components
import { SettingsTitle, CustomButton, DialogConfirmDelete } from '@components/index';

// - Redux
import { deleteAccountUser } from '@src/store/auth/authSlice';
import { useDispatch } from 'react-redux';

// - Hooks
import { useReduxSelector } from '@hooks/index';

export const UserAccountPage = () => {
  const dispatch = useDispatch();
  const { error } = useReduxSelector(state => state.auth);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogConfirm = () => {
    dispatch(deleteAccountUser() as any);
    handleDialogClose();
  };

  return (
    <div>
      <SettingsTitle title="Delete account" color={'error'}></SettingsTitle>

      <p>Once you delete your account, there is no going back. Please be certain.</p>

      <CustomButton color={'error'} onClick={handleDialogOpen}>
        Delete your account
      </CustomButton>

      <DialogConfirmDelete dialogOpen={dialogOpen} handleDialogClose={handleDialogClose} handleDialogConfirm={handleDialogConfirm}></DialogConfirmDelete>
      {error ? <div className="error-text">{error}</div> : <></>}
    </div>
  );
};
