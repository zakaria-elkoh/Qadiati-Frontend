import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  // Check if user is authenticated
  const isAuthenticated =
    localStorage.getItem(
      "CognitoIdentityServiceProvider.2p5th55hlvccno1r8bd5ds53g0.LastAuthUser"
    ) !== null;

  // If authenticated, redirect to dashboard/home
  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  // If not authenticated, render the public route
  return <Outlet />;
};

export default PublicRoute;
