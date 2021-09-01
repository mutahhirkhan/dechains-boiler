import Dashboard from "../Pages/Dashboards/Dashboard";
import Chat from "../Pages/Chat/Chat";
import SignIn from "../Pages/SignIn";
export const DashboardRoutes = [
  {
    path: "/",
    component: Dashboard,
    exact: true,
    visible: true,
  },
  {
    path: "/signIn",
    component: SignIn,
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
