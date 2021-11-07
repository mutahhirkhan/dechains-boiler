import { createSlice } from "@reduxjs/toolkit";

import { getDashboardFinanceFiguresAdmin } from "./thunk";

const initialState = {
    status: "idle",
    isAuthorized: null,
    dashboardFinanceFiguresCount: null,
    networkError: true,
};

export const slice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        // setSelectedChatInRedux(state, action) {
        //     const { id } = action.payload;
        //     state.selectedChat = id;
        // },
    },
    extraReducers: (builder) => {
        builder
            // ________________________________________________

            .addCase(getDashboardFinanceFiguresAdmin.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getDashboardFinanceFiguresAdmin.fulfilled, (state, action) => {
                state.status = "idle";
                state.isAuthorized = true;
                state.networkError = true;

                state.dashboardFinanceFiguresCount = action.payload;
            })
            .addCase(getDashboardFinanceFiguresAdmin.rejected, (state, action) => {
                state.status = "failed";
                if (action.error.message === "") 
                    state.networkError = false;
                
                if (action.error.message === "Unauthorized") 
                    state.isAuthorized = false;

            });

        // ________________________________________________
    },
});

export const selectStatus = (state) => state.dashboard.status === "loading";
export const selectIsAuthorized = (state) => state.dashboard.isAuthorized;
export const selectNetworkError = (state) => state.dashboard.networkError;
export const selectDashboardFinanceCount = (state) => state.dashboard.dashboardFinanceFiguresCount;

// export const { getSignup } = slice.actions;

export default slice.reducer;
