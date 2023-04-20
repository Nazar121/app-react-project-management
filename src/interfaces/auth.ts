export interface AuthUser {
  id: string;
}

export interface AuthStateStore {
  authUser: AuthUser | null;
  error: string;
  isLoading: Boolean;
}

export interface AuthForm {
  email: string;
  password: string;
}
