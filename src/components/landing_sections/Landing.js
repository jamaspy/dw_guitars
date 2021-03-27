import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as landingStyles from "../../scss/landing.module.scss";
const Landing = () => {
  return (
    <div className={landingStyles.main_container}>
      <StaticImage src="../../images/Black.svg" alt="dw_logo" />
    </div>
  );
};

export default Landing;
