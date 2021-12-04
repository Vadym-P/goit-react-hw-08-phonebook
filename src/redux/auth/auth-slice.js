import { createReducer, createSlice } from '@reduxjs/toolkit';
import { registration, login, logout } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  loading: false,
};

const auth = createReducer(initialState, {
  [registration.fulfilled]: (_, { payload }) => payload,
  [login.fulfilled]: (_, { payload }) => payload,
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.pending]: (state, _) => (state.loading = true),
    [registration.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    [registration.rejected]: (state, _) => (state.loading = false),

    [login.pending]: (state, _) => (state.loading = true),
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    [login.rejected]: (state, _) => (state.loading = false),

    [logout.pending]: (state, _) => (state.loading = true),
    [logout.fulfilled]: (state, _) => {
      state.loading = false;
      state.token = null;
      state.user = { name: '', email: '' };
      state.isLoggedIn = false;
    },
    [logout.rejected]: (state, _) => (state.loading = false),
  },
});

// export const { registration, login, logout } = authSlice.actions;
// export default authSlice.reducer;
export default auth;
