import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";

import { getDashboardCount } from "./thunk";

const thunks = [getDashboardCount];

const initialState = {
  status: "idle",
  dashboardCount: [],
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // removeJobseekerProfileById: (state) => {
    //   state.jobseekerProfileById = [];
    // },
  },
  extraReducers: (builder) => {
    builder

      // moving from dashboard
      .addCase(getDashboardCount.fulfilled, (state, action) => {
        state.status = "idle";
        state.dashboardCount = action.payload;
      })
      .addMatcher(isPending(...thunks), (state) => {
        state.status = "loading";
      })
      .addMatcher(isRejected(...thunks), (state) => {
        state.status = "failed";
      });
  },
});

// export const { removeJobseekerProfileById } = slice.actions;

export default slice.reducer;
