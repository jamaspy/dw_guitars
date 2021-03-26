import React from "react";
import { myContext } from "../context/provider";
const Layout = () => {
  return (
    <myContext.Consumer>
      {(context) => <React.Fragment>{children}</React.Fragment>}
    </myContext.Consumer>
  );
};

export default Layout;
