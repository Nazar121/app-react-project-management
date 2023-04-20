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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
  },
});

// export const {} = authSlice.actions;
