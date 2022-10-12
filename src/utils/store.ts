import {configureStore} from '@reduxjs/toolkit';
import tokenTableSlice from '../redux/tokenTableSlice';

export const store = configureStore({
  reducer: {
    tokenTable: tokenTableSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;