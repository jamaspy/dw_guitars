import React, { useState } from "react";
import GoTrue from "gotrue-js";

// markup
const IndexPage = ({ location }) => {
  console.log("TESTY THIS IS LOCATION", location);
  console.log("TESTY THIS IS LOCATION", location?.hash);

  const token = location?.hash.split("=")[1];
  console.log("TESTY This is token", token);
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

  // const handleLogin = () => {
  //   const { email, password } = state;
  //   auth
  //     .login(email, password, true)
  //     .then((response) => {
  //       console.log(JSON.stringify(response));
  //     })
  //     .catch((error) => console.error(error));
  // };

  const setPassword = () => {
    const { password } = state;
    auth
      .acceptInvite(token, password)
      .then((res) => console.log("RES from Signup", res))
      .catch((err) => console.error(err));
  };

  return (
    <main>
      <title>Home Page</title>
      <h1>DW_Guitars</h1>
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

export default IndexPage;
