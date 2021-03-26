import React, { useState, useContext } from "react";
import GoTrue from "gotrue-js";
import { navigate } from "gatsby";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider";
// markup
const Setpassword = () => {
  const contextState = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  // const token = location?.hash.split("=")[1];
  const { token } = contextState;
  console.log("Token from contextState", token);
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
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome, lets setup your password</h1>
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