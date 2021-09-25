import { createAsyncThunk } from "@reduxjs/toolkit";

import { signIn as signInAPI } from "./service";

export const signInAdmin = createAsyncThunk(
  "sign-in/superman",
  async (payload) => {
    const response = await signInAPI(payload);
    return response.data;
  }
);
