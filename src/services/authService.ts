import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser } from 'firebase/auth';

// - Interfaces
import { AuthUser, AuthForm } from '@interfaces/auth';

// - LocalStorage keys
const AUTH_USER_KEY: string = 'authUser';

const registerUser = async (data: AuthForm) => {
  if (!data || !data?.email || !data?.password) return Promise.reject('Invalid data');

  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, data?.email, data?.password);
};

const loginUser = async (data: AuthForm) => {
  if (!data || !data?.email || !data?.password) return Promise.reject('Invalid data');

  const auth = getAuth();
  return signInWithEmailAndPassword(auth, data?.email, data?.password);
};

const logout = () => {
  removeAuthUserFromLS();
};

const deleteAccountUser = async () => {
  const auth = getAuth();
  const user: any = auth?.currentUser;
  return deleteUser(user);
};

const setAuthUserToLS = (authUser: AuthUser | null): void => {
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(authUser));
};

const getAuthUserFromLS = (): AuthUser | null => {
  const itemByKey = localStorage.getItem(AUTH_USER_KEY);
  return itemByKey ? JSON.parse(itemByKey) : null;
};

const removeAuthUserFromLS = (): void => {
  localStorage.removeItem(AUTH_USER_KEY);
};

export const AuthService = {
  registerUser,
  loginUser,
  logout,
  deleteAccountUser,
  setAuthUserToLS,
  getAuthUserFromLS,
  removeAuthUserFromLS,
};
