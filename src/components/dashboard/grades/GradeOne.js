import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ListItem from "../../styled_components/LessonItem";
const GradeOne = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulGrade {
        edges {
          node {
            gradeName
            gradeNumber
            lessons {
              lessonTitle
              shortDescription
            }
          }
        }
      }
    }
  `);
  const gradeData = data.allContentfulGrade.edges[0].node;
  console.log(gradeData);
  return (
    <div>
      <h2>Welcome to {gradeData.gradeName}</h2>
      {gradeData.lessons.map((lesson, index) => (
        <ListItem
          title={lesson.lessonTitle}
          description={lesson.shortDescription}
        />
      ))}
    </div>
  );
};

export default GradeOne;
