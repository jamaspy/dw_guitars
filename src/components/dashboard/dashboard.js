import React, { useState } from "react";
import * as dashStyles from "../../scss/dash.module.scss";
import { graphql, useStaticQuery, Link } from "gatsby";
import Grade from "./components/Grade";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import Video from "../video/Video";
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
    <button
      className={
        grade === +number
          ? dashStyles.grade_icon_selected
          : dashStyles.grade_icon
      }
      onClick={() => {
        setGrade(+number);
      }}
    >
      <p>G{number}</p>
    </button>
  );

  const renderVideo = () => {
    return (
      grade && (
        <Video src="http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8" />
      )
    );
  };

  return (
    <>
      <div className={dashStyles.container}>
        <div className={dashStyles.menu}>
          <Link>
            <StaticImage
              onClick={() => navigate("/")}
              src="../../images/White.svg"
              alt="dw_logo"
            />
          </Link>
          <h2 className={dashStyles.title}>First Steps</h2>
          <div className={dashStyles.step_icon_container}>
            <button
              className={
                grade === -2
                  ? dashStyles.step_icon_selected
                  : dashStyles.step_icon
              }
              onClick={() => setGrade(-2)}
            >
              S1
            </button>
            <button
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
            </button>
          </div>
          <h2 className={dashStyles.title}>Select Grade</h2>
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
          <div className={dashStyles.video_container}>{renderVideo()}</div>
        </div>
      </div>
      ;
    </>
  );
};
export default Dashboard;
