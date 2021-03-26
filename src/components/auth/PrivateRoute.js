import React, { useContext } from "react";
import { navigate } from "gatsby";

import { GlobalStateContext } from "../../context/GlobalContextProvider";
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const contextState = useContext(GlobalStateContext);
  if (!contextState.access_token && location.pathname !== `/app/login`) {
    navigate("/app/login");
    return null;
  }
  return <Component {...rest} />;
};
export default PrivateRoute;
