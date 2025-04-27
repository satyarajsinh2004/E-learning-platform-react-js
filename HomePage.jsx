import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import profilePic from '../assets/images/pic-1.jpg';
import tutor2 from '../assets/images/pic-2.jpg';
import tutor3 from '../assets/images/pic-3.jpg';
import tutor4 from '../assets/images/pic-4.jpg';
import tutor5 from '../assets/images/pic-5.jpg';
import tutor6 from '../assets/images/pic-6.jpg';
import tutor7 from '../assets/images/pic-7.jpg';
import thumb1 from '../assets/images/thumb-1.png';
import thumb2 from '../assets/images/thumb-2.png';
import thumb3 from '../assets/images/thumb-3.png';
import thumb4 from '../assets/images/thumb-4.png';
import thumb5 from '../assets/images/thumb-5.png';
import thumb6 from '../assets/images/thumb-6.png';

const HomePage = () => {
  return (
    <>
      <header className="header">
        <section className="flex">
          <Link to="/" className="logo">Educa.</Link>

          <form className="search-form">
            <input type="text" name="search_box" required placeholder="search courses..." maxLength="100" />
            <button type="submit" className="fas fa-search"></button>
          </form>

          <div className="icons">
            <div id="menu-btn" className="fas fa-bars"></div>
            <div id="search-btn" className="fas fa-search"></div>
            <div id="user-btn" className="fas fa-user"></div>
            <div id="toggle-btn" className="fas fa-sun"></div>
          </div>

          <div className="profile">
            <img src={profilePic} className="image" alt="" />
            <h3 className="name">Thakor Satyaraj</h3>
            <p className="role">student</p>
            <Link to="/profile" className="btn">view profile</Link>
            <div className="flex-btn">
              <Link to="/login" className="option-btn">login</Link>
              <Link to="/register" className="option-btn">register</Link>
            </div>
          </div>
        </section>
      </header>

      <div className="side-bar">
        <div id="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <div className="profile">
          <img src={profilePic} className="image" alt="" />
          <h3 className="name">Thakor Satyaraj</h3>
          <p className="role">student</p>
          <Link to="/profile" className="btn">view profile</Link>
        </div>

        <nav className="navbar">
          <Link to="/"><i className="fas fa-home"></i><span>home</span></Link>
          <Link to="/about"><i className="fas fa-question"></i><span>about</span></Link>
          <Link to="/courses"><i className="fas fa-graduation-cap"></i><span>courses</span></Link>
          <Link to="/teachers"><i className="fas fa-chalkboard-user"></i><span>teachers</span></Link>
          <Link to="/contact"><i className="fas fa-headset"></i><span>contact us</span></Link>
        </nav>
      </div>

      <section className="home-grid">
        <h1 className="heading">quick options</h1>

        <div className="box-container">
          <div className="box">
            <h3 className="title">likes and comments</h3>
            <p className="likes">total likes : <span>25</span></p>
            <Link to="#" className="inline-btn">view likes</Link>
            <p className="likes">total comments : <span>12</span></p>
            <Link to="#" className="inline-btn">view comments</Link>
            <p className="likes">saved playlists : <span>4</span></p>
            <Link to="#" className="inline-btn">view playlists</Link>
          </div>

          <div className="box">
            <h3 className="title">top categories</h3>
            <div className="flex">
              <Link to="#"><i className="fas fa-code"></i><span>development</span></Link>
              <Link to="#"><i className="fas fa-chart-simple"></i><span>business</span></Link>
              <Link to="#"><i className="fas fa-pen"></i><span>design</span></Link>
              <Link to="#"><i className="fas fa-chart-line"></i><span>marketing</span></Link>
              <Link to="#"><i className="fas fa-music"></i><span>music</span></Link>
              <Link to="#"><i className="fas fa-camera"></i><span>photography</span></Link>
              <Link to="#"><i className="fas fa-cog"></i><span>software</span></Link>
              <Link to="#"><i className="fas fa-vial"></i><span>science</span></Link>
            </div>
          </div>

          <div className="box">
            <h3 className="title">popular topics</h3>
            <div className="flex">
              <Link to="#"><i className="fab fa-html5"></i><span>HTML</span></Link>
              <Link to="#"><i className="fab fa-css3"></i><span>CSS</span></Link>
              <Link to="#"><i className="fab fa-js"></i><span>JavaScript</span></Link>
              <Link to="#"><i className="fab fa-react"></i><span>React</span></Link>
              <Link to="#"><i className="fab fa-php"></i><span>PHP</span></Link>
              <Link to="#"><i className="fab fa-bootstrap"></i><span>Bootstrap</span></Link>
            </div>
          </div>

          <div className="box">
            <h3 className="title">become a tutor</h3>
            <p className="tutor">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nam?</p>
            <Link to="/teachers" className="inline-btn">get started</Link>
          </div>
        </div>
      </section>

      <section className="courses">
        <h1 className="heading">our courses</h1>
        <div className="box-container">
          {[{ img: tutor2, thumb: thumb1, title: 'complete HTML tutorial' }, { img: tutor3, thumb: thumb2, title: 'complete CSS tutorial' }, { img: tutor4, thumb: thumb3, title: 'complete JS tutorial' }, { img: tutor5, thumb: thumb4, title: 'complete Bootstrap tutorial' }, { img: tutor6, thumb: thumb5, title: 'complete JQuery tutorial' }, { img: tutor7, thumb: thumb6, title: 'complete SASS tutorial' }].map((course, index) => (
            <div className="box" key={index}>
              <div className="tutor">
                <img src={course.img} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>21-10-2022</span>
                </div>
              </div>
              <div className="thumb">
                <img src={course.thumb} alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">{course.title}</h3>
              <Link to="/playlist" className="inline-btn">view playlist</Link>
            </div>
          ))}
        </div>
        <div className="more-btn">
          <Link to="/courses" className="inline-option-btn">view all courses</Link>
        </div>
      </section>

      <footer className="footer">
        &copy; copyright @ 2025 by <span>mr. web developer</span> | all rights reserved!
      </footer>
    </>
  );
};

export default HomePage;
