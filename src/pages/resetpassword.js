import React, { useState, useEffect, useContext } from "react";
import GoTrue from "gotrue-js";
import { navigate, Link } from "gatsby";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider";
import * as passwordStyles from "../scss/setpassword.module.scss";
import { StaticImage } from "gatsby-plugin-image";

// markup
const ResetPassword = ({ location }) => {
  const contextState = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  useEffect(() => {
    const token = location?.hash.split("=")[1];
    dispatch({ type: "SET_INVITE_TOKEN", token: token });
  }, []);

  const auth = new GoTrue({
    APIUrl: "https://dwguitars.netlify.app/.netlify/identity",
    audience: "",
    setCookie: false,
  });

  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [match, setMatch] = useState(true);
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    console.log(state);
  };

  const handlePasswordsMatch = () => {
    const { password, confirm_password } = state;
    if (password !== confirm_password) {
      setMatch(false);
      return false;
    }
    setMatch(true);
    return true;
  };

  const resetPassword = () => {
    const { password } = state;
    setLoading(true);
    user
      .update({ password: password })
      .then((user) => {
        setLoading(false);
        console.log("Updated user %s", user);
        navigate("/login/");
      })
      .catch((error) => {
        setLoading(false);
        console.log("Failed to update user: %o", error);
        throw error;
      });
  };

  useEffect(() => {
    const token = location?.hash.split("=")[1];
    auth
      .recover(token, true)
      .then((response) => {
        setUser(response);
        console.log("Logged in as %s", JSON.stringify({ response }));
      })
      .catch((error) =>
        console.log("Failed to verify recover token: %o", error)
      );
  }, []);

  return (
    <main className={passwordStyles.form_container}>
      <title>Reset Passord</title>
      <Link to="/">
        <StaticImage
          className={passwordStyles.form_logo}
          src="../images/Black.svg"
          alt="dw_logo"
        />
      </Link>
      <p style={{ marginBottom: 20 }}>Enter your new password below</p>

      <div className={passwordStyles.form_input_field}>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={(event) => handleChange(event)}
          onBlur={handlePasswordsMatch}
        />
      </div>
      <div className={passwordStyles.form_input_field}>
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          name="confirm_password"
          type="password"
          onChange={(event) => handleChange(event)}
          onBlur={handlePasswordsMatch}
        />
      </div>
      {!match && (
        <>
          <p className={passwordStyles.error_message}>
            Passwords Do Not Match. Please check and try again.
          </p>
        </>
      )}
      <button
        disabled={loading || !match}
        className={passwordStyles.form_button}
        onClick={resetPassword}
      >
        {loading ? "Setting Password..." : "Reset Password"}
      </button>
    </main>
  );
};

export default ResetPassword;
