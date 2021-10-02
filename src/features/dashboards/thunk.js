import {
  getDashboardCount as getDashboardCountAPI,
  getDashboardFinanceFigures as getDashboardFinanceFiguresAPI,
} from "./service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDashboardCountAdmin = createAsyncThunk(
  "dashboard-count/get",
  async (qs) => {
    const response = await getDashboardCountAPI(qs);
    return response.data;
  }
);
export const getDashboardFinanceFiguresAdmin = createAsyncThunk(
  "dashboard-finance-count/get",
  async (qs) => {
    const response = await getDashboardFinanceFiguresAPI(qs);
    return response.data;
  }
);
