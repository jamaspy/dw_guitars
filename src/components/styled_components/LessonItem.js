import React from "react";
import * as lessonStyles from "../../scss/lesson.module.scss";
import { FaRegPlayCircle } from "react-icons/fa";
const ListItem = ({ title, description }) => {
  return (
    <div className={lessonStyles.container}>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button className={lessonStyles.play_button}>
        <p>Play</p> <FaRegPlayCircle />
      </button>
    </div>
  );
};
export default ListItem;
