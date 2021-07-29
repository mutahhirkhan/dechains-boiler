import React from "react";
import { Chat } from "../features/index";
import Dashboard from "../features/dashboards/dashboard";
export const DashboardRoutes = [
  {
    path: "/",
    component: Dashboard,
    exact: true,
    visible: true,
  },
  {
    path: "/chat",
    component: Chat,
    exact: true,
    visible: true,
  },
];
