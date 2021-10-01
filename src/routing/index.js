import Dashboard from "../features/dashboards/dashboard";
import SignIn from '../features/SignIn/SignIn';
import Blogs from '../features/blogs/Blogs.jsx';
export const DashboardRoutes = [
  {
    path: "/",
    component: Dashboard,
    exact: true,
    visible: true,
  },
  {
    path: "/blogs",
    component: Blogs,
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
