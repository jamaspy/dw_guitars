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
  Footer,
  Landing,
  Team,
  Testimonials,
  Videos,
} from "../components/landing_sections";

const IndexPage = ({ location }) => {
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
    <main className={indexStyles.container}>
      <title>Home Page</title>
      <Landing />
      <Team />
      <Testimonials />
      <Videos />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;
