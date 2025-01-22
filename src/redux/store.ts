import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/AdminsSlice';
import usrSlice from './slices/userSlice';
import pageStateSlice from './slices/pageStateSlice';

export const store = configureStore({
  reducer: {
    usersSlice: usersSlice,
    userSlice: usrSlice,
    pageState: pageStateSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
