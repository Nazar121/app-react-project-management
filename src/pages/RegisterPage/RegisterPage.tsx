import React from 'react';

// - Form
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// - Components
import { ControlledTextField, CustomButton } from '@components/index';

// - Redux
import { registerUser } from '@src/store/auth/authSlice';
import { useDispatch } from 'react-redux';

// _ Interfaces
import { AuthForm } from '@interfaces/auth';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string().label('Email').trim().required().email(),
    password: Yup.string().label('Password').trim().required().min(6).max(8),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: AuthForm) => {
    dispatch(registerUser(data) as any);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="authForm">
      <h1 className="formTitle">Let's go!</h1>

      <div className="formItem">
        <ControlledTextField control={control} name="email" label="Email" error={errors.email}></ControlledTextField>
      </div>

      <div className="formItem">
        <ControlledTextField control={control} name="password" label="Password" error={errors.password}></ControlledTextField>
      </div>

      <div className="formActions">
        <CustomButton type={'submit'}>Register</CustomButton>
      </div>
    </form>
  );
};
