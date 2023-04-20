import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
