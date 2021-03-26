import React, { useContext, useEffect } from "react";
import { navigate, Link } from "gatsby";
import GoTrue from "gotrue-js";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider";

const IndexPage = ({ location }) => {
  const dispatch = useContext(GlobalDispatchContext);
  const contextState = useContext(GlobalStateContext);

  useEffect(() => {
    const token = location?.hash.split("=")[1];
    dispatch({ type: "SET_INVITE_TOKEN", token: token });
    console.log("INDEX TOKEN", token);
  }, []);

  useEffect(() => {
    if (contextState.token) {
      navigate("/setpassword");
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
      <h1>Welcome To DW Guitars Academy</h1>
      {contextState.access_token ? (
        <>
          <Link to="/app/dashboard">Enter Dashboard</Link>
          <button onClick={handleLogOut}>Log Out</button>
        </>
      ) : (
        <Link to="/app/login">Login</Link>
      )}
    </main>
  );
};

export default IndexPage;
