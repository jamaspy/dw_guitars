import React, { useState, useContext } from "react";
import { navigate, Link } from "gatsby";
import GoTrue from "gotrue-js";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";
import * as loginStyles from "../../scss/login.module.scss";
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
        dispatch({
          type: "SET_LOGIN_ERROR",
          error: "",
        });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        dispatch({
          type: "SET_LOGIN_ERROR",
          error: error.json.error_description,
        });
        setLoading(false);
      });
  };

  return (
    <main className={loginStyles.form_container}>
      <div className={loginStyles.form_input_field}>
        <label htmlFor="email">Email </label>
        <input name="email" type="email" onChange={(e) => handleChange(e)} />
      </div>

      <div className={loginStyles.form_input_field}>
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <p className={loginStyles.error_message}>{contextState.login_error}</p>
      <button className={loginStyles.form_button} onClick={handleLogin}>
        {loading ? "Logging In..." : "Login"}
      </button>
      <Link to="/">Home</Link>
    </main>
  );
};

export default Login;
