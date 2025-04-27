import React from "react";
import { useParams } from "react-router-dom";

import video1 from "../../assets/vid-1.mp4";
import video2 from "../../assets/vid-2.mp4";
import video3 from "../../assets/vid-3.mp4";
import video4 from "../../assets/vid-4.mp4";
import video5 from "../../assets/vid-5.mp4";
import video6 from "../../assets/vid-6.mp4";

import post1 from "../../assets/post-1-1.png";
import post2 from "../../assets/post-1-2.png";
import post3 from "../../assets/post-1-3.png";
import post4 from "../../assets/post-1-4.png";
import post5 from "../../assets/post-1-5.png";
import post6 from "../../assets/post-1-6.png";

const videos = [
  { id: 1, src: video1, poster: post1, title: "Complete HTML Tutorial (Part 01)" },
  { id: 2, src: video2, poster: post2, title: "Complete HTML Tutorial (Part 02)" },
  { id: 3, src: video3, poster: post3, title: "Complete HTML Tutorial (Part 03)" },
  { id: 4, src: video4, poster: post4, title: "Complete HTML Tutorial (Part 04)" },
  { id: 5, src: video5, poster: post5, title: "Complete HTML Tutorial (Part 05)" },
  { id: 6, src: video6, poster: post6, title: "Complete HTML Tutorial (Part 06)" },
];

const WatchVideo = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === parseInt(id));

  if (!video) {
    return <p>Video not found</p>;
  }

  return (
    <section className="watch-video p-6 bg-light min-h-screen">
      <div className="video-container max-w-4xl mx-auto">
        <div className="video mb-4">
          <video
            src={video.src}
            controls
            poster={video.poster}
            className="w-full rounded"
          ></video>
        </div>

        <h3 className="title text-xl font-bold mb-2">{video.title}</h3>
      </div>
    </section>
  );
};

export default WatchVideo;