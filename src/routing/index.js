import Dashboard from "../features/dashboards/dashboard";
import SignIn from "../features/SignIn/SignIn";
import Blogs from "../features/blogs/Blogs.jsx";
import CreateBlog from "../features/createBlog/CreateBlog";
import NewBlog from '../features/newBlog/NewBlog';
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
    path: "/create-blog",
    component: NewBlog,
    exact: true,
    visible: false,
  },
];
