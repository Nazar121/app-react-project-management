import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { TextField } from '@mui/material';

interface ControlledTextFieldProps {
  name: string;
  label: string;
  control: Control<any, any> | undefined;
  error?: FieldError | undefined;
  type?: 'email' | 'text' | 'password' | 'number';
  placeholder?: string;
  variant?: 'filled' | 'outlined' | 'standard';
}

export const ControlledTextField = (props: ControlledTextFieldProps) => {
  return (
    <Controller
      control={props?.control}
      name={props?.name}
      render={({ field }) => (
        <TextField
          {...field}
          type={props?.type || 'text'}
          label={props?.label}
          placeholder={props?.placeholder}
          fullWidth
          variant={props?.variant || 'standard'}
          color="secondary"
          // required={}
          error={!!props?.error}
          helperText={props?.error && `${props?.error?.message}`}
        />
      )}
    />
  );
};
