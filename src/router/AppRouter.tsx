import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import PrivateRoute from "@/layouts/PrivateRoute";
import PublicRoute from "@/layouts/PublicRoute";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import LogIn from "@/pages/LogIn";
import Chat from "@/pages/Chat";
import Connect from "@/pages/Connect";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/connect",
            element: <Connect />,
          },
          {
            path: "/chat",
            element: <Chat />,
          },
        ],
      },
      {
        element: <PublicRoute />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/login",
            element: <LogIn />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default AppRouter;
