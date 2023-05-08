import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// - Libs
import { FirebaseError } from '@firebase/util';

// - Services
import { AuthService } from '@services/index';

// - Interfaces
import { AuthForm, AuthStateStore, AuthUser } from '@interfaces/auth';

const initialState: AuthStateStore = {
  authUser: AuthService.getAuthUserFromLS(),
  error: '',
  isLoading: false,
};

export const registerUser = createAsyncThunk('auth/registerUser', async (data: AuthForm, thunkAPI): Promise<AuthUser | any> => {
  try {
    const userCredential = await AuthService.registerUser(data);
    return { id: userCredential?.user?.uid };
  } catch (error) {
    const errorMessage = error instanceof FirebaseError ? error?.message : 'Error registration user';
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (data: AuthForm, thunkAPI): Promise<AuthUser | any> => {
  try {
    const userCredential = await AuthService.loginUser(data);
    return { id: userCredential?.user?.uid };
  } catch (error) {
    const errorMessage = error instanceof FirebaseError ? error?.message : 'Error registration user';
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const deleteAccountUser = createAsyncThunk('auth/deleteAccountUser', async (_, thunkAPI): Promise<any> => {
  try {
    const userCredential = await AuthService.deleteAccountUser();
    return 'The account has been deleted';
  } catch (error) {
    const errorMessage = error instanceof FirebaseError ? error?.message : 'Error when deleting the account';
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.authUser = null;
      state.isLoading = false;
      state.error = '';

      AuthService.logout();
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, (state, action: PayloadAction<unknown>) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<AuthUser>) => {
        state.authUser = action?.payload;
        state.isLoading = false;
        state.error = '';

        AuthService.setAuthUserToLS(state.authUser);
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<unknown>) => {
        state.authUser = null;
        state.isLoading = false;
        state.error = String(action.payload);

        AuthService.setAuthUserToLS(state.authUser);
      });

    builder
      .addCase(loginUser.pending, (state, action: PayloadAction<unknown>) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthUser>) => {
        state.authUser = action?.payload;
        state.isLoading = false;
        state.error = '';

        AuthService.setAuthUserToLS(state.authUser);
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<unknown>) => {
        state.authUser = null;
        state.isLoading = false;
        state.error = String(action.payload);

        AuthService.setAuthUserToLS(state.authUser);
      });

    builder
      .addCase(deleteAccountUser.pending, (state, action: PayloadAction<unknown>) => {
        state.isLoading = true;
      })
      .addCase(deleteAccountUser.fulfilled, (state, action: PayloadAction<unknown>) => {
        state.authUser = null;
        state.isLoading = false;
        state.error = '';

        AuthService.logout();
      })
      .addCase(deleteAccountUser.rejected, (state, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = String(action.payload);
      });
  },
});

export const { logout } = authSlice.actions;
