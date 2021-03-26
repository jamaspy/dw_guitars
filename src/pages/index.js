import React, { useState, useContext, useEffect } from "react";
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

  console.log("Index ContextState", contextState);

  const auth = new GoTrue({
    APIUrl: "https://dwguitars.netlify.app/.netlify/identity",
    audience: "",
    setCookie: false,
  });

  const [login, setLogin] = useState("");

  const handleChange = (evt) => {
    const value = evt.target.value;
    setLogin({
      ...login,
      [evt.target.name]: value,
    });
    console.log(login);
  };

  const handleLogin = () => {
    const { email, password } = login;
    auth
      .login(email, password, true)
      .then((response) => {
        console.log("LOGIN RES", response);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome To DW Guitars Academy</h1>
      <label htmlFor="email">
        Email
        <input name="email" type="email" onChange={(e) => handleChange(e)} />
      </label>
      <label htmlFor="email">
        Password
        <input
          name="password"
          type="password"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button onClick={handleLogin}>login</button>
      <Link to="/setpassword">Set Password Page</Link>
    </main>
  );
};

export default IndexPage;
