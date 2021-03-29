import React from "react";
import * as dashStyles from "../../scss/dash.module.scss";
const GradeNumber = ({ number }) => {
  return <div className={dashStyles.grade_icon}>{number}</div>;
};

export default GradeNumber;
