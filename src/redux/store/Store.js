import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import useDashboardReducer from "../slice/dashboardSlice";
import { useSelector } from "react-redux";
export const useAppSelector = useSelector;

const store = configureStore({
    reducer: {
        users: userReducer,
        dashboard : useDashboardReducer
    },
});

export default store;
