import { getAuth, updateEmail, updatePassword } from 'firebase/auth';

// - Interfaces
import { UserUpdateEmailForm, UserUpdatePasswordForm } from '@interfaces/users';

const updateUserEmail = async (data: UserUpdateEmailForm) => {
  const auth = getAuth();
  return updateEmail(auth?.currentUser as any, data?.email);
};

const updateUserPassword = async (data: UserUpdatePasswordForm) => {
  const auth = getAuth();
  return updatePassword(auth?.currentUser as any, data?.password);
};

export const UsersService = {
  updateUserEmail,
  updateUserPassword,
};
