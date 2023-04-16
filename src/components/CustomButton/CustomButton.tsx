import React from 'react';
import { Button } from '@mui/material';

interface Props {
  children: any;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  color?: 'secondary' | 'inherit' | 'primary' | 'success' | 'error' | 'info' | 'warning' | undefined;
  onClick?: () => void;
}

export const CustomButton = (props: Props) => {
  return (
    <Button type={props?.type || 'button'} variant={props.variant || 'contained'} color={props.color || 'secondary'} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};
