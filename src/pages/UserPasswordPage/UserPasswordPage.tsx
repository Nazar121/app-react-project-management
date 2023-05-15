import React from 'react';

// - Form
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// - Redux
import { updateUserPassword } from '@store/users/usersSlice';
import { useDispatch } from 'react-redux';

// - Components
import { ControlledTextField, CustomButton, SettingsTitle } from '@components/index';

// - Interfaces
import { UserUpdatePasswordForm } from '@interfaces/users';

export const UserPasswordPage = () => {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    password: Yup.string().label('Password').trim().required().min(6).max(8),
    confirmPassword: Yup.string()
      .label('Confirm password')
      .trim()
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      }),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdatePasswordForm>({
    mode: 'all',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: UserUpdatePasswordForm) => {
    dispatch(updateUserPassword(data) as any);
  };

  return (
    <div>
      <SettingsTitle title="Change password"></SettingsTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formItem">
          <ControlledTextField control={control} name="password" label="Password" error={errors.password}></ControlledTextField>
        </div>

        <div className="formItem">
          <ControlledTextField control={control} name="confirmPassword" label="Confirm password" error={errors.confirmPassword}></ControlledTextField>
        </div>

        <div className="formActions">
          <CustomButton type={'submit'}>Change</CustomButton>
        </div>
      </form>
    </div>
  );
};
