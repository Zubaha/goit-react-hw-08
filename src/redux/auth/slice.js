import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiLogin, apiLogout, apiRefreshUser, apiRegister } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(apiRefreshUser.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(apiRefreshUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(apiLogout.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addMatcher(
        isAnyOf(apiLogin.pending, apiRegister.pending, apiLogout.pending),
        (state) => {
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(apiLogin.fulfilled, apiRegister.fulfilled),
        (state, action) => {
          state.isLoggedIn = true;
          state.token = action.payload.token;
          state.user = action.payload.user;
        }
      )
      .addMatcher(
        isAnyOf(apiRegister.rejected, apiLogin.rejected, apiLogout.rejected),
        (state, action) => {
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
