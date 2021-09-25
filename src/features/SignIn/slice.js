import { createSlice } from "@reduxjs/toolkit";

import { signInAdmin } from "./thunk";

const initialState = {
  status: "idle",
  responseStatus: null,
  signInSuccess: false,
  signInError: null,
  signInResponse: {},
};

export const slice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    signInSuccessDefault: (state) => {
      state.signInSuccess = false;
      state.signInResponse = {};
      state.responseStatus = null;
      state.signInError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAdmin.pending, (state) => {
        state.status = "loading";
        state.signInSuccess = false;
        state.signInError = null;
        state.signInResponse = null;
        state.responseStatus = "authorized";
      })
      .addCase(signInAdmin.fulfilled, (state, action) => {
        state.status = "idle";
        state.signInSuccess = true;
        state.signInResponse = action.payload;
        state.responseStatus = null;
      })
      .addCase(signInAdmin.rejected, (state, action) => {
        state.status = "failed";
        state.signInSuccess = false;
        state.signInError = action.error.message;
        state.responseStatus = null;
      });
  },
});

export const selectSignIn = (state) => state.signIn.signInSuccess;
export const selectSignInError = (state) => state.signIn.signInError;
export const selectSignInResponse = (state) => state.signIn.signInResponse;
export const selectSignInStatus = (state) => state.signIn.status === "loading";
export const selectStatus = (state) => state.signIn.status;

export const { signInSuccessDefault } = slice.actions;

export default slice.reducer;
