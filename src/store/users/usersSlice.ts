import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// - Libs
import { FirebaseError } from '@firebase/util';

// - Services
import { UsersService } from '@services/index';

// - Interfaces
import { UsersStateStore, UserUpdateEmailForm } from '@interfaces/users';

const initialState: UsersStateStore = {
  error: '',
  isLoading: false,
};

export const updateUserEmail = createAsyncThunk('users/updateUserEmail', async (data: UserUpdateEmailForm, thunkAPI): Promise<any> => {
  try {
    const res = await UsersService.updateUserEmail(data);
    return data?.email;
  } catch (error) {
    const errorMessage = error instanceof FirebaseError ? error?.message : 'Error registration user';
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
  },
});

export const {} = usersSlice.actions;
