import React from "react";
import * as videoStyles from "../../scss/video.module.scss";
import { BiCameraMovie } from "react-icons/bi";
const Videos = () => {
  return (
    <main className={videoStyles.main}>
      <div className={videoStyles.title_container}>
        From The Students Themselves
      </div>
      <div className={videoStyles.container}>
        <div className={videoStyles.video}>
          <BiCameraMovie className={videoStyles.icon} />
          <p>David Ju</p>
          <iframe
            src="https://www.youtube.com/embed/uumYaby0t7Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={videoStyles.video}>
          <BiCameraMovie className={videoStyles.icon} />
          <p>Newport High School</p>

          <iframe
            src="https://www.youtube.com/embed/A3uhsPEPfrk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Videos;
