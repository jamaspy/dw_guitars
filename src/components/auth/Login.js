import React, { useState, useContext } from "react";
import { navigate, Link } from "gatsby";
import GoTrue from "gotrue-js";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";
import * as loginStyles from "../../scss/login.module.scss";
import { StaticImage } from "gatsby-plugin-image";

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

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = login;
    auth
      .login(email, password, true)
      .then((response) => {
        dispatch({
          type: "SET_ACCESS_TOKEN",
          token: response.token.access_token,
        });
        localStorage.setItem("accessToken", response.token.access_token);
        dispatch({
          type: "SET_LOGIN_ERROR",
          error: "",
        });
        setLoading(false);
        navigate("/app/dashboard");
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
    <form
      className={loginStyles.form_container}
      onSubmit={(e) => handleLogin(e)}
    >
      <Link to="/">
        <StaticImage
          className={loginStyles.form_logo}
          src="../../images/Black.svg"
          alt="dw_logo"
        />
      </Link>
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
      <Link
        to="/requestnewpassword/"
        className={loginStyles.forgotten_password_text}
      >
        <p>Forgotten Password</p>
      </Link>
      <p className={loginStyles.error_message}>{contextState.login_error}</p>
      <button
        className={
          loading ? loginStyles.form_button_loading : loginStyles.form_button
        }
        type="submit"
      >
        {loading ? "Logging In..." : "Login"}
      </button>
    </form>
  );
};

export default Login;
