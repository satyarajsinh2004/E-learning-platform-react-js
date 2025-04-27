import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import post1 from "../../assets/post-1-1.png";
import post2 from "../../assets/post-1-2.png";
import post3 from "../../assets/post-1-3.png";
import post4 from "../../assets/post-1-4.png";
import post5 from "../../assets/post-1-5.png";
import post6 from "../../assets/post-1-6.png";

const PlaylistPage = () => {
  const videos = [
    { id: 1, title: "Complete HTML Tutorial (Part 01)", thumbnail: post1 },
    { id: 2, title: "Complete HTML Tutorial (Part 02)", thumbnail: post2 },
    { id: 3, title: "Complete HTML Tutorial (Part 03)", thumbnail: post3 },
    { id: 4, title: "Complete HTML Tutorial (Part 04)", thumbnail: post4 },
    { id: 5, title: "Complete HTML Tutorial (Part 05)", thumbnail: post5 },
    { id: 6, title: "Complete HTML Tutorial (Part 06)", thumbnail: post6 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="playlist-videos p-6 bg-light min-h-screen"
    >
      <h1 className="text-3xl font-bold text-dark mb-6">Playlist Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="box bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <i className="fas fa-play text-xl mb-2 block text-primary"></i>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full rounded"
            />
            <h3 className="mt-2 font-medium text-center text-dark">{video.title}</h3>
            <Link
              to={`/watch/${video.id}`}
              className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Watch Now
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PlaylistPage;