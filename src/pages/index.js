import React, { useContext, useEffect } from "react";
import { navigate, Link } from "gatsby";
import GoTrue from "gotrue-js";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider";
import * as indexStyles from "../scss/index.module.scss";
import {
  Contact,
  Landing,
  Team,
  Testimonials,
  Videos,
} from "../components/landing_sections";

const IndexPage = ({ location }) => {
  const dispatch = useContext(GlobalDispatchContext);
  const contextState = useContext(GlobalStateContext);

  useEffect(() => {
    console.log("I Fired On Load");
    const token = location?.hash.split("=")[1];
    dispatch({ type: "SET_INVITE_TOKEN", token: token });
    console.log("INDEX TOKEN", token);
  }, []);

  useEffect(() => {
    console.log("Testy contextState.token", contextState.token);
    if (contextState.token) {
      navigate("/setpassword/");
    }
  }, [contextState.token]);

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
    <main>
      <title>Home Page</title>
      {contextState.access_token ? (
        <>
          <Link
            style={{ position: "absolute", right: 100, top: 30 }}
            to="/app/dashboard"
          >
            Enter Dashboard
          </Link>
          <button
            style={{ position: "absolute", right: 30, top: 30 }}
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </>
      ) : (
        <Link
          style={{ position: "absolute", right: 30, top: 30 }}
          to="/app/login"
        >
          Login
        </Link>
      )}
      <Landing />
      <Team />
      <Testimonials />
      <Videos />
      <Contact />
    </main>
  );
};

export default IndexPage;
