import React, { useEffect, useRef, useState } from "react";
import VideoJS from "video.js";
import "video.js/dist/video-js.min.css";

const Video = ({ src, poster, playId }) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const options = {
    plugins: {
      // httpSourceSelector: {
      //   default: "high",
      // },
      // eventTracking: true,
    },
    fill: true,
    fluid: true,
    responsive: true,
    preload: "auto",
    controls: true,
    autoplay: true,
    poster: poster,
    html5: {
      vhs: {
        enableLowInitialPlaylist: false,
        smoothQualityChange: true,
      },
    },
    sourceOrder: true,
  };

  useEffect(() => {
    // require("videojs-contrib-quality-levels");
    // require("videojs-http-source-selector");
    // require("videojs-event-tracking");
    const videoPlayer = VideoJS(videoRef.current, options);

    // videoPlayer.httpSourceSelector();
    // videoPlayer.eventTracking({
    //   performance: function (data) {
    //     const body = {
    //       // play_id: playId,
    //       buffer_count: data.bufferCount,
    //       buffer_duration: data.bufferDuration,
    //       initial_load_time: data.initialLoadTime,
    //       pause_count: data.pauseCount,
    //       seek_count: data.seekCount,
    //       total_duration: data.totalDuration,
    //       watched_duration: data.watchedDuration,
    //     };
    //   },
    // });

    setPlayer(videoPlayer);
    return () => videoPlayer.dispose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (player !== null) {
      player.src({
        src: src,
        type: "application/x-mpegURL",
      });
    }
  }, [src, player]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};

export default Video;
