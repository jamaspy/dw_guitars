import React, { useState, useContext } from "react";
import { navigate, Link } from "gatsby";
import GoTrue from "gotrue-js";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";
const Login = () => {
  const contextState = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const auth = new GoTrue({
    APIUrl: "https://dwguitars.netlify.app/.netlify/identity",
    audience: "",
    setCookie: false,
  });

  const [login, setLogin] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (evt) => {
    const value = evt.target.value;
    setLogin({
      ...login,
      [evt.target.name]: value,
    });
    console.log(login);
  };

  const handleLogin = () => {
    setLoading(true);
    const { email, password } = login;
    auth
      .login(email, password, true)
      .then((response) => {
        dispatch({
          type: "SET_ACCESS_TOKEN",
          token: response.token.access_token,
        });
        console.log("LOGIN RES", response);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <main>
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
      <button onClick={handleLogin}>
        {loading ? "Logging In..." : "Login"}
      </button>
      <Link to="/">Home</Link>
    </main>
  );
};

export default Login;
