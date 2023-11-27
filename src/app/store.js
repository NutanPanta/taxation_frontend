import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { NODE_ENV } from '../config';
import { apiSlice } from './apiSlice';

import authReducer from '../features/auth/redux/auth.slice';

export const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer, auth: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  devTools: NODE_ENV === 'development',
});

setupListeners(store.dispatch);
