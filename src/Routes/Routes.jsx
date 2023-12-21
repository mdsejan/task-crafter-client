import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layout/MainLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../pages/Layout/DashboardLayout";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import Error from "../pages/shared/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "dashboard",
    errorElement: <Error></Error>,
    element: <DashboardLayout></DashboardLayout>,
    children: [
      //User Routes
      {
        path: "user",
        element: <UserDashboard></UserDashboard>,
      },
    ],
  },
]);

export default router;