import React from "react";
import { Link } from "gatsby";
const Dashboard = () => (
  <>
    <h1>Your Dashboard</h1>
    <ul>
      <li>Grade One</li>
      <li>Grade Two</li>
      <li>Grade Three</li>
      <li>Grade Four</li>
      <li>Grade Five</li>
    </ul>
    <Link to="/">Home</Link>
  </>
);
export default Dashboard;
