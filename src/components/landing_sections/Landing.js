import React, { useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as landingStyles from "../../scss/landing.module.scss";
import { navigate, Link } from "gatsby";
import GoTrue from "gotrue-js";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";
const Landing = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const contextState = useContext(GlobalStateContext);
  const auth = new GoTrue({
    APIUrl: "https://dwguitars.netlify.app/.netlify/identity",
    audience: "",
    setCookie: false,
  });
  const user = auth.currentUser();
  const handleLogOut = () => {
    user
      .logout()
      .then(() => {
        dispatch({
          type: "SET_ACCESS_TOKEN",
          token: undefined,
        });
        console.log("User Logged Out");
      })
      .catch((error) => {
        console.log("Failed to logout user: %o", error);
        throw error;
      });
  };
  return (
    <div className={landingStyles.main_container}>
      {contextState.access_token ? (
        <>
          <button
            className={landingStyles.dashboard_button}
            onClick={() => navigate("/app/dashboard")}
          >
            Dashboard
          </button>
          <button
            className={landingStyles.logout_button}
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </>
      ) : (
        <Link className={landingStyles.login_link} to="/app/login">
          Login
        </Link>
      )}
      <StaticImage src="../../images/Black.svg" alt="dw_logo" />
    </div>
  );
};

export default Landing;
