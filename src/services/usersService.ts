import { getAuth, updateEmail } from 'firebase/auth';

// - Interfaces
import { UserUpdateEmailForm } from '@interfaces/users';

const updateUserEmail = async (data: UserUpdateEmailForm) => {
  const auth = getAuth();
  return updateEmail(auth?.currentUser as any, data?.email);
};

export const UsersService = {
  updateUserEmail,
};
