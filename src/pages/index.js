import React, { useState } from "react";
import GoTrue from "gotrue-js";

// markup
const IndexPage = () => {
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
    let params = new URLSearchParams(document.location.search.substring(1));
    let token = params.get("invite_token");
    const { password } = state;
    auth
      .acceptInvite(token, password)
      .then((res) => console.log("RES from Signup", res))
      .catch((err) => console.error(err));
  };

  let params = new URLSearchParams(document.location.search.substring(1));
  let token = params.get("token");
  console.log("TESTY Params", params);
  console.log("TESTY token", token);
  return (
    <main>
      <title>Home Page</title>
      <h1>DW_Guitars</h1>
      <label htmlFor="email">
        Email
        <input
          name="email"
          type="email"
          onChange={(event) => handleChange(event)}
        />
      </label>
      <label htmlFor="password">
        Pasword
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
