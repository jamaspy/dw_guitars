import React, { useState, useContext } from "react";
import GoTrue from "gotrue-js";
import { navigate, Link } from "gatsby";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider";
// markup
const Setpassword = () => {
  const contextState = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const { token } = contextState;
  console.log("setPassword TOKEN", token);
  console.log("setPassword ContextState", contextState);
  const auth = new GoTrue({
    APIUrl: "https://dwguitars.netlify.app/.netlify/identity",
    audience: "",
    setCookie: false,
  });

  const [state, setState] = useState("");

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    console.log(state);
  };

  const setPassword = () => {
    const { password } = state;
    auth
      .acceptInvite(token, password)
      .then((res) => {
        dispatch({ type: "SET_INVITE_TOKEN", token: undefined });
        console.log("RES from Signup", res?.token?.access_token);
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome, lets setup your password</h1>
      <h1>This is token: {token}</h1>
      <Link to="/">Home</Link>
      <label htmlFor="password">
        Set Your Password
        <input
          name="password"
          type="password"
          onChange={(event) => handleChange(event)}
        />
      </label>
      <button onClick={setPassword}>Set Password</button>
    </main>
  );
};

export default Setpassword;
