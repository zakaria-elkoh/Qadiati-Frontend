import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC = () => {
  // const [shouldRedirect, setShouldRedirect] = useState(false);

  // if (shouldRedirect) {
  //   return <Navigate to="/login" replace />;
  // }

  return <Outlet />;
};

export default PrivateRoute;
