import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import { getDashboardFinanceFiguresAdmin, } from "./thunk";
import {  selectDashboardFinanceCount } from "./slice";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const dashboardFinanceCount = useAppSelector(selectDashboardFinanceCount);

  useEffect(() => {
    // dispatch(getDashboardFinanceFiguresAdmin());
  }, []);


  return (
    <>

      <div className="header-div">
        <h1>Hello From Dashboard</h1>
      </div>
      
    </>
  );
};

export default Dashboard;
