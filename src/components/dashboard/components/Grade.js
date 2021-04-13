import React from "react";
import ListItem from "../../styled_components/LessonItem";
const Grade = ({ gradeData }) => {
  return gradeData ? (
    <div>
      <h2>Welcome to {gradeData.gradeName}</h2>
      {gradeData.lessons.map((lesson, index) => (
        <ListItem
          key={index}
          title={lesson.lessonTitle}
          description={lesson.shortDescription}
        />
      ))}
    </div>
  ) : (
    <></>
  );
};

export default Grade;
