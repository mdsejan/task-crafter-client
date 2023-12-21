import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layout/MainLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../pages/Layout/DashboardLayout";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import Error from "../pages/shared/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      //User Routes
      {
        path: "user",
        element: <UserDashboard></UserDashboard>,
      },
    ],
  },

  {
    path: "login",
    errorElement: <Error></Error>,
    element: <Login></Login>,
  },
  {
    path: "register",
    errorElement: <Error></Error>,
    element: <Register></Register>,
  },
]);

export default router;
