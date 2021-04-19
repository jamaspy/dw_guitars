import React, { useState } from "react";
import GoTrue from "gotrue-js";
import { Link } from "gatsby";
import * as passwordStyles from "../scss/setpassword.module.scss";
import { StaticImage } from "gatsby-plugin-image";
const RequestPassword = () => {
  const auth = new GoTrue({
    APIUrl: "https://dwguitars.netlify.app/.netlify/identity",
    audience: "",
    setCookie: false,
  });

  const [state, setState] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    console.log(state.email);
  };

  const handleRequestPassword = () => {
    setLoading(true);
    const { email } = state;
    auth
      .requestPasswordRecovery(email)
      .then((response) => console.log("Recovery email sent", { response }))
      .then(() => {
        setEmailSent(true);
        setLoading(false);
      })
      .catch((error) => console.log("Error sending recovery mail: %o", error));
  };
  return (
    <>
      <title>Request New Password</title>
      <main className={passwordStyles.form_container}>
        {emailSent ? (
          <>
            <Link to="/">
              <StaticImage
                className={passwordStyles.form_logo}
                src="../images/Black.svg"
                alt="dw_logo"
              />
            </Link>
            <p className={passwordStyles.email_sent_message}>
              Please check your emails, and follow the link to reset your
              password.
              <p className={passwordStyles.email_sub_sent_message}>
                Sometimes the email can land in your junks mail, so please check
                there too.
              </p>
            </p>
          </>
        ) : (
          <>
            <Link to="/">
              <StaticImage
                className={passwordStyles.form_logo}
                src="../images/Black.svg"
                alt="dw_logo"
              />
            </Link>
            <p style={{ marginBottom: 20 }}>
              Enter your email address below and we will send you an email.
              Follow the link on the email to reset your password.
            </p>

            <div className={passwordStyles.form_input_field}>
              <label htmlFor="password">Your Email</label>
              <input
                name="email"
                type="email"
                onChange={(event) => handleChange(event)}
              />
            </div>

            <button
              disabled={loading}
              className={passwordStyles.form_button}
              onClick={handleRequestPassword}
            >
              Request Reset Email
            </button>
          </>
        )}
      </main>
    </>
  );
};

export default RequestPassword;
