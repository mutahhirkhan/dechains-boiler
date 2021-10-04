import Dashboard from "../features/dashboards/dashboard";
import SignIn from "../features/SignIn/SignIn";
import Blogs from "../features/blogs/Blogs.jsx";
import TestApi from "../features/testApi/TestApi";
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
    {
        path: "/test",
        component: TestApi,
        exact: true,
        visible: true,
    },
];
