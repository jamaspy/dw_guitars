import React, { useState, useContext } from "react";
import { navigate } from "gatsby";
import GoTrue from "gotrue-js";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider";
// markup
const IndexPage = ({ location }) => {
  const dispatch = useContext(GlobalDispatchContext);
  const contextState = useContext(GlobalStateContext);
  const token = location?.hash.split("=")[1];

  console.log("INDEX TOKEN", token);
  console.log("Index ContextState", contextState);

  useEffect(() => {
    if (token) {
      dispatch({ type: "SET_INVITE_TOKEN", token: token });
    }
  }, []);

  // const auth = new GoTrue({
  //   APIUrl: "https://dwguitars.netlify.app/.netlify/identity",
  //   audience: "",
  //   setCookie: false,
  // });

  // const [state, setState] = useState("");

  // const handleChange = (evt) => {
  //   const value = evt.target.value;
  //   setState({
  //     ...state,
  //     [evt.target.name]: value,
  //   });
  //   console.log(state);
  // };

  // const handleLogin = () => {
  //   const { email, password } = state;
  //   auth
  //     .login(email, password, true)
  //     .then((response) => {
  //       console.log(response);
  //       console.log(JSON.stringify(response));
  //     })
  //     .catch((error) => console.error(error));
  // };

  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome To DW Guitars Academy</h1>
      <button onlClick={() => navigate("setpassword")}>
        Set Password Page
      </button>
    </main>
  );
};

export default IndexPage;
