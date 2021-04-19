import React from "react";
import { navigate } from "gatsby";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const localToken = localStorage.getItem("accessToken");
  if (!localToken && location.pathname !== `/app/login`) {
    navigate("/app/login");
    return null;
  }
  return <Component {...rest} />;
};
export default PrivateRoute;
