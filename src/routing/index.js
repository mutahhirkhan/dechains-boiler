import Dashboard from "../features/dashboards/dashboard";
import SignIn from "../features/SignIn/SignIn";
import Blogs from "../features/blogs/Blogs.jsx";
import Jobseeker from "../features/Jobseeker/Jobseeker";
import CreateBlog from "../features/createBlog/CreateBlog";
import NewBlog from "../features/newBlog/NewBlog";
import Applications from "../features/applications/Applications";
import ApprovApplications from "../features/approvedApplications/ApprovApplications";
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
        component: Jobseeker,
        exact: true,
        visible: true,
    },
    {
        path: "/create-blog",
        component: NewBlog,
        exact: true,
        visible: false,
    },
    {
        path: "/applications-request",
        component: Applications,
        exact: true,
        visible: false,
    },
    {
        path: "/applications",
        component: ApprovApplications,
        exact: true,
        visible: false,
    },
];
