import { createSlice } from "@reduxjs/toolkit";

import { getDashboardCountAdmin ,getDashboardFinanceFiguresAdmin} from "./thunk";

const initialState = {
  status: "idle",
  dashboardCount: [],
  isAuthorized: null,
  dashboardFinanceFiguresCount : null
};

export const slice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardCountAdmin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDashboardCountAdmin.fulfilled, (state, action) => {
        state.status = "idle";
        if(action.meta.requestStatus === "fulfilled") {
            state.isAuthorized = true;
        }
        state.dashboardCount = action.payload;
      })
      .addCase(getDashboardCountAdmin.rejected, (state, action) => {
        state.status = "failed";
        if (action.error.message === "Unauthorized") {
          state.isAuthorized = false;
        }
      })
      

      // ________________________________________________
  
      .addCase(getDashboardFinanceFiguresAdmin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDashboardFinanceFiguresAdmin.fulfilled, (state, action) => {
        state.status = "idle";
        state.dashboardFinanceFiguresCount = action.payload;
      })
      .addCase(getDashboardFinanceFiguresAdmin.rejected, (state, action) => {
        state.status = "failed";
      })

      // ________________________________________________
  },
});

export const selectStatus = (state) => state.dashboard.status === "loading";
export const selectIsAuthorized = (state) => state.dashboard.isAuthorized;
export const selectDashboardCount = (state) => state.dashboard.dashboardCount;
export const selectDashboardFinanceCount = (state) => state.dashboard.dashboardFinanceFiguresCount;

// export const { getSignup } = slice.actions;

export default slice.reducer;
