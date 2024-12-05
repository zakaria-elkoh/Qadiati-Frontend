import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import PrivateRoute from "@/layouts/PrivateRoute";
import PublicRoute from "@/layouts/PublicRoute";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
// import LogIn from "@/pages/LogIn";
import Chat from "@/pages/Chat";
import Connect from "@/pages/Connect";
import TopicRecommender from "@/pages/Recommendation";
import Help from "@/pages/Help";
import AuthLayout from "@/components/auth/AuthLayout";
import Register from "@/components/auth/Register";
import LogIn from "@/components/auth/LogIn";

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
            path: "/help",
            element: <Help />,
          },
          {
            path: "/chat",
            element: <Chat />,
          },
          {
            path: "/recommender",
            element: <TopicRecommender />,
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
            path: "/auth",
            element: <AuthLayout />,
            children: [
              {
                path: "login",
                element: <LogIn />,
              },
              {
                path: "register",
                element: <Register />,
              },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <Navigate to="/" replace />,
  // },
]);

export default AppRouter;
