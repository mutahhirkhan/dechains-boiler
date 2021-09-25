import { Chat } from "../features/index";
import Dashboard from "../features/dashboards/dashboard";
import SignIn from '../features/SignIn/SignIn';
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
  {
    path: "/sign-in",
    component: SignIn,
    exact: true,
    visible: true,
  },
];
