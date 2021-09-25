import {
  getDashboardCount as getDashboardCountAPI,
  getDashboardFinanceFigures as getDashboardFinanceFiguresAPI,
} from "./service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDashboardCountAdmin = createAsyncThunk(
  "dashboard-count/get",
  async (qs) => {
    const response = await getDashboardCountAPI(qs);
    console.log("RESPONSE", response);
    return response.data;
  }
);
export const getDashboardFinanceFiguresAdmin = createAsyncThunk(
  "dashboard-finance-count/get",
  async () => {
    const response = await getDashboardFinanceFiguresAPI();
    console.log("RESPONSE", response);
    return response.data;
  }
);
