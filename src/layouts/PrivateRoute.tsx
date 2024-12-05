import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Check if user is authenticated by looking for the access token
  const isAuthenticated =
    localStorage.getItem(
      "CognitoIdentityServiceProvider.2p5th55hlvccno1r8bd5ds53g0.LastAuthUser"
    ) !== null;

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  // If authenticated, render the protected route
  return <Outlet />;
};

export default PrivateRoute;
