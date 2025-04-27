import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


import pic1 from "../../assets/pic-1.jpg";
import pic2 from "../../assets/pic-2.jpg";
import pic3 from "../../assets/pic-3.jpg";
import pic4 from "../../assets/pic-4.jpg";
import pic5 from "../../assets/pic-5.jpg";
import pic6 from "../../assets/pic-6.jpg";
import pic7 from "../../assets/pic-7.jpg";
import pic8 from "../../assets/pic-8.jpg";
import pic9 from "../../assets/pic-9.jpg";

import thumb1 from "../../assets/thumb-1.png";
import thumb2 from "../../assets/thumb-2.png";
import thumb3 from "../../assets/thumb-3.png";
import thumb4 from "../../assets/thumb-4.png";
import thumb5 from "../../assets/thumb-5.png";
import thumb6 from "../../assets/thumb-6.png";
import thumb7 from "../../assets/thumb-7.png";
import thumb8 from "../../assets/thumb-8.png";
import thumb9 from "../../assets/thumb-9.png";

const courses = [
  { id: 1, title: "Complete HTML Tutorial", tutor: "Mahesh Rao", tutorImage: pic1, thumbnail: thumb1, videos: 10 },
  { id: 2, title: "Complete CSS Tutorial", tutor: "Sahil Shah", tutorImage: pic2, thumbnail: thumb2, videos: 12 },
  { id: 3, title: "JavaScript Basics", tutor: "Ravi Kumar", tutorImage: pic3, thumbnail: thumb3, videos: 15 },
  { id: 4, title: "Bootstrap Tutorial", tutor: "Anjali Singh", tutorImage: pic4, thumbnail: thumb4, videos: 8 },
  { id: 5, title: "JQuery Course", tutor: "Pooja Mehta", tutorImage: pic5, thumbnail: thumb5, videos: 10 },
  { id: 6, title: "Sass Essentials", tutor: "Amit Patel", tutorImage: pic6, thumbnail: thumb6, videos: 9 },
  { id: 7, title: "PHP For Beginners", tutor: "Sneha Roy", tutorImage: pic7, thumbnail: thumb7, videos: 20 },
  { id: 8, title: "MySql Course", tutor: "Rahul Verma", tutorImage: pic8, thumbnail: thumb8, videos: 18 },
  { id: 9, title: "Advance React", tutor: "Neha Sharma", tutorImage: pic9, thumbnail: thumb9, videos: 25 },
];

const CoursesPage = () => {
  return (
    <>
      <Navbar /> 
      <section className="courses p-6 bg-light min-h-screen">
        <h1 className="text-3xl font-bold text-dark mb-6">Our Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="box bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="tutor flex items-center gap-4 mb-4">
                <img src={course.tutorImage} alt={course.tutor} className="w-12 h-12 rounded-full object-cover" />
                <div className="info">
                  <h3 className="font-medium text-dark">{course.tutor}</h3>
                  <span className="text-sm text-dark2">15-03-2025</span>
                </div>
              </div>
              <div className="thumb mb-4">
                <img src={course.thumbnail} alt={course.title} className="w-full rounded" />
                <span className="block text-sm text-dark2 mt-2">{course.videos} videos</span>
              </div>
              <h3 className="title text-lg font-semibold text-dark mb-4">{course.title}</h3>
              <Link to={`/playlist`} className="primary-btn">
                View Playlist
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesPage;