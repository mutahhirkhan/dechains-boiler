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
            console.log("GET_COUNT FULFILLED AUTH ||| T R U E |||");
            state.isAuthorized = true;
        }
        console.log("GET COUNT FULFILLED", action.meta.requestStatus);
        state.dashboardCount = action.payload;
      })
      .addCase(getDashboardCountAdmin.rejected, (state, action) => {
        state.status = "failed";
        if (action.error.message === "Unauthorized") {
          state.isAuthorized = false;
        }
        console.log("GET COUNT REJECTED", action);
      })
      

      // ________________________________________________
  
      .addCase(getDashboardFinanceFiguresAdmin.pending, (state) => {
        state.status = "loading";
        console.log("GET FINANCE PENDING");
      })
      .addCase(getDashboardFinanceFiguresAdmin.fulfilled, (state, action) => {
        state.status = "idle";
        console.log("GET FINANCE FULFILLED", action);
        state.dashboardFinanceFiguresCount = action.payload;
      })
      .addCase(getDashboardFinanceFiguresAdmin.rejected, (state, action) => {
        state.status = "failed";
        console.log("GET COUNT REJECTED", action);
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
