import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import pic2 from "../../assets/pic-2.jpg";
import thumb1 from "../../assets/thumb-1.png";
import thumb2 from "../../assets/thumb-2.png";
import thumb3 from "../../assets/thumb-3.png";
import thumb4 from "../../assets/thumb-4.png";

const TeacherProfile = () => {
  const { id } = useParams();

  const teacher = {
    id: 1,
    name: "S Megha",
    role: "Developer",
    img: pic2,
    stats: {
      playlists: 4,
      videos: 18,
      likes: 1208,
      comments: 52,
    },
    courses: [
      { img: thumb1, title: "Complete HTML Tutorial" },
      { img: thumb2, title: "Complete CSS Tutorial" },
      { img: thumb3, title: "Complete JavaScript Tutorial" },
      { img: thumb4, title: "Complete Bootstrap Tutorial" },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="teacher-profile p-6 md:p-12 bg-gray-100 min-h-screen"
    >
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center mb-8"
      >
        <div className="tutor flex flex-col items-center">
          <img
            src={teacher.img}
            alt={teacher.name}
            className="w-32 h-32 rounded-full mb-4 shadow-md"
          />
          <h3 className="text-2xl font-bold text-gray-800">{teacher.name}</h3>
          <span className="text-gray-600">{teacher.role}</span>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <p className="text-gray-600">
            Total playlists: <span className="font-bold">{teacher.stats.playlists}</span>
          </p>
          <p className="text-gray-600">
            Total videos: <span className="font-bold">{teacher.stats.videos}</span>
          </p>
          <p className="text-gray-600">
            Total likes: <span className="font-bold">{teacher.stats.likes}</span>
          </p>
          <p className="text-gray-600">
            Total comments: <span className="font-bold">{teacher.stats.comments}</span>
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="courses"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Courses by {teacher.name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teacher.courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="box bg-white p-4 rounded-lg shadow-lg text-center"
            >
              <div className="thumb mb-4">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full rounded-lg"
                />
                <span className="block text-sm text-gray-600 mt-2">10 videos</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
              <a
                href="/playlist"
                className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                View Playlist
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default TeacherProfile;
