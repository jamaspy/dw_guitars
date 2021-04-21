import React, { useState, useEffect, useContext } from "react";
import GoTrue from "gotrue-js";
import { navigate, Link } from "gatsby";
import { GlobalDispatchContext } from "../context/GlobalContextProvider";
import * as passwordStyles from "../scss/setpassword.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const Setpassword = ({ location }) => {
  const dispatch = useContext(GlobalDispatchContext);

  useEffect(() => {
    const token = location?.hash.split("=")[1];
    dispatch({ type: "SET_INVITE_TOKEN", token: token });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const auth = new GoTrue({
    APIUrl: "https://dwguitars.netlify.app/.netlify/identity",
    audience: "",
    setCookie: false,
  });

  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const setPassword = () => {
    const { password } = state;
    setLoading(true);
    const token = location?.hash.split("=")[1];
    auth
      .acceptInvite(token, password)
      .then((res) => {
        dispatch({ type: "SET_INVITE_TOKEN", token: undefined });
        setLoading(false);
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <main className={passwordStyles.form_container}>
      <title>Create Password</title>
      <Link to="/">
        <StaticImage
          className={passwordStyles.form_logo}
          src="../images/Black.svg"
          alt="dw_logo"
        />
      </Link>
      <p style={{ marginBottom: 20 }}>Set You Password Below</p>

      <div className={passwordStyles.form_input_field}>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="text"
          onChange={(event) => handleChange(event)}
        />
      </div>

      <button
        disabled={loading}
        className={passwordStyles.form_button}
        onClick={setPassword}
      >
        {loading ? "Setting Password..." : "Save Password"}
      </button>
    </main>
  );
};

export default Setpassword;
