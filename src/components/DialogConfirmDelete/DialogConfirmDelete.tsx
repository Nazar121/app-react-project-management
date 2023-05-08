import React from 'react';
import styles from './DialogConfirmDelete.module.scss';

// - NUI
import { Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { HighlightOff } from '@mui/icons-material';

// - Components
import { CustomButton } from '@components/index';

interface Props {
  dialogOpen: boolean;
  dialogMaxWidth?: 'xs' | 'xl' | 'sm' | 'md' | 'lg';
  dialogTitle?: boolean;
  dialogText?: boolean;
  handleDialogClose: () => void;
  handleDialogConfirm: () => void;
}

export const DialogConfirmDelete = (props: Props) => {
  return (
    <Dialog open={props?.dialogOpen} maxWidth={props?.dialogMaxWidth ? props?.dialogMaxWidth : 'xs'} onClose={props?.handleDialogClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent className={styles.content}>
        <HighlightOff className={styles.icon} color={'error'} />

        <h2 className={styles.title}>{props?.dialogTitle ? props?.dialogTitle : 'Are you sure?'}</h2>

        <DialogContentText className={styles.text}>{props?.dialogText ? props?.dialogText : 'Do you really want to delete this account? This process cannot be undone.'}</DialogContentText>
      </DialogContent>

      <DialogActions className={styles.actions}>
        <CustomButton onClick={props?.handleDialogClose} color={'inherit'}>
          Cancel
        </CustomButton>
        <CustomButton onClick={props?.handleDialogConfirm} color={'error'} autoFocus>
          Delete
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};
