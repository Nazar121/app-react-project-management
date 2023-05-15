export interface UsersStateStore {
  error: string;
  isLoading: Boolean;
}

export interface UserUpdateEmailForm {
  email: string;
}

export interface UserUpdatePasswordForm {
  password: string;
  confirmPassword: string;
}
