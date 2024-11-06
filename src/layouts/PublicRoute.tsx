import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  // const [shouldRedirect, setShouldRedirect] = useState(false);

  // if (shouldRedirect) {
  //   return <Navigate to="/" replace />;
  // }

  return <Outlet />;
};

export default PublicRoute;
