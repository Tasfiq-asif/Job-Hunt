import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddJob from "../pages/AddJob/AddJob";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyJobs from "../pages/MyJobs/MyJobs";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../pages/AllJobs/AllJobs";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import Blogs from "../pages/Blogs/Blogs";
import UserProfile from "../pages/UserProfile/UserProfile";
import AccessToken from "../pages/Blogs/AccessToken";
import Nest from "../pages/Blogs/Nest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blogs/accesstoken",
        element: <AccessToken />,
      },
      {
        path: "/blogs/nest",
        element: <Nest/>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/addjob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/alljobs",
        element: <AllJobs />,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://jobhunt-server-seven.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://jobhunt-server-seven.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/myjobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedjobs",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
