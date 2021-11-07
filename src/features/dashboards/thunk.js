// import { getDashboardFinanceFigures as getDashboardFinanceFiguresAPI }  from "./service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDashboardFinanceFiguresAdmin = createAsyncThunk("dashboard-finance-count/get", async (qs, getState) => {
    const combinedReduxState = getState();
    // const response = await getDashboardFinanceFiguresAPI(qs);
    // return response.data;
});
