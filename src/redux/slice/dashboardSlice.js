import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../services/Dashboard";

export const getDashboardCount = createAsyncThunk(
  "dashboard/count",
  async () => {
    console.log("DASHBOARD SLICE");
    try {
      let {
        data: { data },
      } = await Api.getDashboardCount();
      console.log("data.token", data);
      return data;
    } catch (e) {
      console.log("e", e);
    }
  }
);

const initialState = {
  dashboardCount: [],
  status: "idle",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  extraReducers: {
    [getDashboardCount.pending]: (state, action) => {
      console.log("pending");
      state.status = "loading";
    },
    [getDashboardCount.fulfilled]: (state, action) => {
      console.log("fulfilled", action.payload);
      state.status = "idle";
      state.dashboardCount = action.payload;
    },
    [getDashboardCount.rejected]: (state, action) => {
      console.log("rejected");
      state.status = "failed";
    },
  },
});

export const selectDashboardCount = (state) => state.dashboard.dashboardCount;

export default dashboardSlice.reducer;
