import React, { useContext, useEffect } from "react";
import { navigate, Link } from "gatsby";
import GoTrue from "gotrue-js";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider";
import * as indexStyles from "../scss/index.module.scss";
import {
  Contact,
  Footer,
  Landing,
  Team,
  Testimonials,
  Videos,
} from "../components/landing_sections";

const IndexPage = () => {
  return (
    <main className={indexStyles.container}>
      <title>Home Page</title>
      <Landing />
      <Team />
      <Testimonials />
      <Videos />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;
