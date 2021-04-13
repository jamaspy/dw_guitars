import React from "react";
import * as videoStyles from "../../scss/video.module.scss";
import { BiCameraMovie } from "react-icons/bi";
const Videos = () => {
  return (
    <main className={videoStyles.container}>
      <div className={videoStyles.video}>
        <BiCameraMovie className={videoStyles.icon} />
        <p>Avalon High School</p>
        <video width="320" height="240" controls>
          <source />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={videoStyles.video}>
        <BiCameraMovie className={videoStyles.icon} />
        <p>Newport High School</p>{" "}
        <video width="320" height="240" controls>
          <source />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={videoStyles.video}>
        <BiCameraMovie className={videoStyles.icon} />
        <p>Collaroy High School</p>{" "}
        <video width="320" height="240" controls>
          <source />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
};

export default Videos;
