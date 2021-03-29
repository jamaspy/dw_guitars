import React, { useState } from "react";
import * as dashStyles from "../../scss/dash.module.scss";
import {
  GradeOne,
  GradeTwo,
  GradeThree,
  GradeFour,
  GradeFive,
  GradeSix,
  GradeSeven,
  GradeEight,
} from "./grades";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

const Dashboard = () => {
  const [grade, setGrade] = useState(undefined);

  const renderGrade = () => {
    switch (grade) {
      case 1:
        return <GradeOne />;
      case 2:
        return <GradeTwo />;
      case 3:
        return <GradeThree />;
      case 4:
        return <GradeFour />;
      case 5:
        return <GradeFive />;
      case 6:
        return <GradeSix />;
      case 7:
        return <GradeSeven />;
      case 8:
        return <GradeEight />;
      default:
        break;
    }
  };
  return (
    <>
      <div className={dashStyles.container}>
        <div className={dashStyles.menu}>
          <StaticImage
            onClick={() => navigate("/")}
            src="../../images/White.svg"
            alt="dw_logo"
          />
          <h1>Choose Your Grade</h1>
          <div
            className={
              grade === 1
                ? dashStyles.grade_icon_selected
                : dashStyles.grade_icon
            }
            onClick={() => setGrade(1)}
          >
            1
          </div>
          <div
            className={
              grade === 2
                ? dashStyles.grade_icon_selected
                : dashStyles.grade_icon
            }
            onClick={() => setGrade(2)}
          >
            2
          </div>
          <div
            className={
              grade === 3
                ? dashStyles.grade_icon_selected
                : dashStyles.grade_icon
            }
            onClick={() => setGrade(3)}
          >
            3
          </div>
          <div
            className={
              grade === 4
                ? dashStyles.grade_icon_selected
                : dashStyles.grade_icon
            }
            onClick={() => setGrade(4)}
          >
            4
          </div>
          <div
            className={
              grade === 5
                ? dashStyles.grade_icon_selected
                : dashStyles.grade_icon
            }
            onClick={() => setGrade(5)}
          >
            5
          </div>
          <div
            className={
              grade === 6
                ? dashStyles.grade_icon_selected
                : dashStyles.grade_icon
            }
            onClick={() => setGrade(6)}
          >
            6
          </div>
          <div
            className={
              grade === 7
                ? dashStyles.grade_icon_selected
                : dashStyles.grade_icon
            }
            onClick={() => setGrade(7)}
          >
            7
          </div>
          <div
            className={
              grade === 8
                ? dashStyles.grade_icon_selected
                : dashStyles.grade_icon
            }
            onClick={() => setGrade(8)}
          >
            8
          </div>
        </div>
        <div className={dashStyles.main}>
          {!grade && <h1>Welcome To Your Online Academy</h1>}
          {renderGrade()}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
