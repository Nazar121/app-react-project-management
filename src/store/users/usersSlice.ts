import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// - Libs
import { FirebaseError } from '@firebase/util';

// - Services
import { UsersService } from '@services/index';

// - Interfaces
import { UsersStateStore, UserUpdateEmailForm, UserUpdatePasswordForm } from '@interfaces/users';

const initialState: UsersStateStore = {
  error: '',
  isLoading: false,
};

export const updateUserEmail = createAsyncThunk('users/updateUserEmail', async (data: UserUpdateEmailForm, thunkAPI): Promise<any> => {
  try {
    const res = await UsersService.updateUserEmail(data);
    return data?.email;
  } catch (error) {
    const errorMessage = error instanceof FirebaseError ? error?.message : 'Error update user email';
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const updateUserPassword = createAsyncThunk('users/updateUserPassword', async (data: UserUpdatePasswordForm, thunkAPI): Promise<any> => {
  try {
    const res = await UsersService.updateUserPassword(data);
    return data?.password;
  } catch (error) {
    const errorMessage = error instanceof FirebaseError ? error?.message : 'Error update user password';
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateUserEmail.pending, (state, action: PayloadAction<unknown>) => {
        state.isLoading = true;
      })
      .addCase(updateUserEmail.fulfilled, (state, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = '';
      })
      .addCase(updateUserEmail.rejected, (state, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = String(action.payload);
      });

    builder
      .addCase(updateUserPassword.pending, (state, action: PayloadAction<unknown>) => {
        state.isLoading = true;
      })
      .addCase(updateUserPassword.fulfilled, (state, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = '';
      })
      .addCase(updateUserPassword.rejected, (state, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = String(action.payload);
      });
  },
});

export const {} = usersSlice.actions;
