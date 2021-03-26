import React from "react";
import { Router } from "@reach/router";
import Dashboard from "../components/dashboard/dashboard";
import Login from "../components/auth/Login";
import PrivateRoute from "../components/auth/PrivateRoute";
const App = () => (
  <Router>
    <Login path="/app/login" />
    <PrivateRoute path="/app/dashboard" component={Dashboard} />
  </Router>
);

export default App;
