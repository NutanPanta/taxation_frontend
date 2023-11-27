import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  access: null,
  refresh: null,
  isLoadingScreenLoaded: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { access, refresh = state.refresh } = action.payload;

      return { ...state, access, refresh, isAuthenticated: true };
    },
    initialize: (state, action) => {
      const {
        isAuthenticated,
        user,
        access,
        refresh,
        isLoadingScreenLoaded = false,
      } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user,
        access,
        refresh,
        isLoadingScreenLoaded,
      };
    },
    login: (state, action) => {
      const { access, refresh } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        access,
        refresh,
      };
    },
  },
});

export const { initialize, login, setCredentials } = authSlice.actions;

export default authSlice.reducer;

// selectors
export const selectCurrentToken = (state) => state.auth.access;
export const selectCurrentUser = (state) => state.auth.user;
