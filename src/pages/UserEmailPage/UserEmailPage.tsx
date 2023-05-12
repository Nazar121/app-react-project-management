import React from 'react';

// - Form
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// - Redux
import { updateUserEmail } from '@store/users/usersSlice';
import { useDispatch } from 'react-redux';

// - Components
import { ControlledTextField, CustomButton, SettingsTitle } from '@components/index';

// - Interfaces
import { UserUpdateEmailForm } from '@interfaces/users';

export const UserEmailPage = () => {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string().label('Email').trim().required().email(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdateEmailForm>({
    mode: 'all',
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: UserUpdateEmailForm) => {
    dispatch(updateUserEmail(data) as any);
  };

  return (
    <div>
      <SettingsTitle title="Update email"></SettingsTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formItem">
          <ControlledTextField control={control} name="email" label="Email" error={errors.email}></ControlledTextField>
        </div>

        <div className="formActions">
          <CustomButton type={'submit'}>Update</CustomButton>
        </div>
      </form>
    </div>
  );
};
