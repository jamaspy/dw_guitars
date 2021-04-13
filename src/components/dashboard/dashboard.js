import React, { useState } from "react";
import * as dashStyles from "../../scss/dash.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import Grade from "./components/Grade";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

const Dashboard = () => {
  const [grade, setGrade] = useState(undefined);
  const data = useStaticQuery(graphql`
    {
      allContentfulGrade(sort: { fields: gradeNumber }) {
        nodes {
          id
          gradeName
          gradeNumber
          lessons {
            lessonTitle
            shortDescription
            id
          }
        }
      }
    }
  `);
  const allGradeData = data.allContentfulGrade.nodes;

  const getSingleGradeData = () => {
    return grade <= allGradeData.length
      ? allGradeData.find((thing) => thing.gradeNumber === grade)
      : [];
  };

  const renderGrade = () => {
    return grade && <Grade gradeData={getSingleGradeData()} />;
  };

  const GradeIcon = ({ number }) => (
    <div
      className={
        grade === +number
          ? dashStyles.grade_icon_selected
          : dashStyles.grade_icon
      }
      onClick={() => {
        console.log(number, grade);
        setGrade(+number);
      }}
    >
      <p>G{number}</p>
    </div>
  );

  return (
    <>
      <div className={dashStyles.container}>
        <div className={dashStyles.menu}>
          <StaticImage
            onClick={() => navigate("/")}
            src="../../images/White.svg"
            alt="dw_logo"
          />
          <h2>First Steps</h2>
          <div className={dashStyles.step_icon_container}>
            <div
              className={
                grade === -2
                  ? dashStyles.step_icon_selected
                  : dashStyles.step_icon
              }
              onClick={() => setGrade(-2)}
            >
              S1
            </div>
            <div
              className={
                grade === -1
                  ? dashStyles.step_icon_selected
                  : dashStyles.step_icon
              }
              onClick={() => {
                console.log(grade);
                setGrade(-1);
              }}
            >
              S2
            </div>
          </div>
          <h2>Select Grade</h2>
          <GradeIcon number="1" />
          <GradeIcon number="2" />
          <GradeIcon number="3" />
          <GradeIcon number="4" />
          <GradeIcon number="5" />
          <GradeIcon number="6" />
          <GradeIcon number="7" />
          <GradeIcon number="8" />
        </div>
        <div className={dashStyles.main}>
          {!grade && (
            <h1>
              Welcome To Your Online Academy. Select a Course from the menu on
              the Left
            </h1>
          )}
          {renderGrade()}
        </div>
      </div>
      ;
    </>
  );
};
export default Dashboard;
