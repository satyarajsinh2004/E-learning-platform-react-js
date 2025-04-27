import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import LoginPage from "./components/LoginPage/LoginPage";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import CoursesPage from "./components/CoursesPage/CoursesPage";
import PlaylistPage from "./components/PlaylistPage/PlaylistPage";
import WatchVideo from "./components/Watchvidio/Watchvidio";
import ContactPage from "./components/Contact/Contact";
import OurTeam from "./components/OurTeam/OurTeam";
import TeacherProfile from "./components/TeacherProfile/TeacherProfile";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar"




const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
  };

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Router>
        <Routes>
          
          <Route
            path="/"
            element={
              <>
                <Main onSignInClick={() => (window.location.href = "/login")} />
                <Services />
                <Banner />
                <Subscribe />
                <Banner2 />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage
                onBack={handleBack}
                onLoginSuccess={handleLoginSuccess}
              />
            }
          />
        
         
          <Route
            path="/courses"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <CoursesPage />
              </Layout>
            }
          />
          <Route
            path="/playlist"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <PlaylistPage />
              </Layout>
            }
          />
          <Route
            path="/watch/:id"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <WatchVideo />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/ourteam"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <OurTeam />
              </Layout>
            }
          />
          <Route
            path="/teacher/:id"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <TeacherProfile />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <About />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Main from "./components/Main/Main";
// import LoginPage from "./components/LoginPage/LoginPage";
// import Services from "./components/Services/Services";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Banner2 from "./components/Banner/Banner2";
// import Footer from "./components/Footer/Footer";
// import CoursesPage from "./components/CoursesPage/CoursesPage";
// import PlaylistPage from "./components/PlaylistPage/PlaylistPage";
// import WatchVideo from "./components/Watchvidio/Watchvidio";
// import ContactPage from "./components/Contact/Contact";
// import OurTeam from "./components/OurTeam/OurTeam";
// import TeacherProfile from "./components/TeacherProfile/TeacherProfile";
// import About from "./components/About/About";
// import Layout from "./components/Layout/Layout";
// import Navbar from "./components/Navbar/Navbar";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   };

//   const handleBack = () => {
//     window.location.href = "/";
//   };

//   return (
//     <main className="overflow-x-hidden bg-white text-dark">
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Main onSignInClick={() => (window.location.href = "/login")} />
//                 <Services />
//                 <Banner />
//                 <Subscribe />
//                 <Banner2 />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/login"
//             element={
//               <LoginPage
//                 onBack={handleBack}
//                 onLoginSuccess={handleLoginSuccess}
//               />
//             }
//           />
//           <Route
//             path="/courses"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <CoursesPage />
//               </Layout>
//             }
//           />
//           <Route
//             path="/playlist"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <PlaylistPage />
//               </Layout>
//             }
//           />
//           <Route
//             path="/watch/:id"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <WatchVideo />
//               </Layout>
//             }
//           />
//           <Route
//             path="/contact"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <ContactPage />
//               </Layout>
//             }
//           />
//           <Route
//             path="/ourteam"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <OurTeam />
//               </Layout>
//             }
//           />
//           <Route
//             path="/teacher/:id"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <TeacherProfile />
//               </Layout>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <About />
//               </Layout>
//             }
//           />
//         </Routes>
//       </Router>
//     </main>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Main from "./components/Main/Main";
// import LoginPage from "./components/LoginPage/LoginPage";
// import Services from "./components/Services/Services";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Banner2 from "./components/Banner/Banner2";
// import Footer from "./components/Footer/Footer";
// import CoursesPage from "./components/CoursesPage/CoursesPage";
// import PlaylistPage from "./components/PlaylistPage/PlaylistPage";
// import WatchVideo from "./components/Watchvidio/Watchvidio";
// import ContactPage from "./components/Contact/Contact";
// import OurTeam from "./components/OurTeam/OurTeam";
// import TeacherProfile from "./components/TeacherProfile/TeacherProfile";
// import About from "./components/About/About";
// import Layout from "./components/Layout/Layout";
// import Navbar from "./components/Navbar/Navbar";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   };

//   const handleBack = () => {
//     window.location.href = "/";
//   };

//   return (
//     <main className="overflow-x-hidden bg-white text-dark">
//       <Router>
//         <Navbar />
//         <Routes>
//           {/* Home Route */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Main onSignInClick={() => (window.location.href = "/login")} />
//                 <Services />
//                 <Banner />
//                 <Subscribe />
//                 <Banner2 />
//                 <Footer />
//               </>
//             }
//           />

//           {/* Services as Separate Page */}
//           <Route
//             path="/services"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <Services />
//               </Layout>
//             }
//           />

//           <Route
//             path="/login"
//             element={
//               <LoginPage
//                 onBack={handleBack}
//                 onLoginSuccess={handleLoginSuccess}
//               />
//             }
//           />

//           <Route
//             path="/courses"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <CoursesPage />
//               </Layout>
//             }
//           />
//           <Route
//             path="/playlist"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <PlaylistPage />
//               </Layout>
//             }
//           />
//           <Route
//             path="/watch/:id"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <WatchVideo />
//               </Layout>
//             }
//           />
//           <Route
//             path="/contact"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <ContactPage />
//               </Layout>
//             }
//           />
//           <Route
//             path="/ourteam"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <OurTeam />
//               </Layout>
//             }
//           />
//           <Route
//             path="/teacher/:id"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <TeacherProfile />
//               </Layout>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 <About />
//               </Layout>
//             }
//           />
//         </Routes>
//       </Router>
//     </main>
//   );
// };

// export default App;
