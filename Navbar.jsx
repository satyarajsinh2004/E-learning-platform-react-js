import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  // {
  //   id: 2,
  //   title: "Services",
  //   path: "/services",
  // },
  {
    id: 3,
    title: "About Us",
    path: "/about",
  },
  {
    id: 4,
    title: "Our Team",
    path: "/ourteam",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
  },
];

const Navbar = ({ onSignInClick, isLoggedIn }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-20 bg-white shadow-md"
    >
      <div className="container py-6 flex justify-between items-center">
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl text-primary">Let's Start Our Coding Journey</h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <motion.li
                key={menu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menu.id * 0.1 }}
              >
                <Link
                  to={menu.path}
                  className="inline-block py-2 px-4 text-dark hover:text-secondary transition duration-200"
                >
                  {menu.title}
                </Link>
              </motion.li>
            ))}
            {!isLoggedIn && ( 
              <motion.button
                onClick={onSignInClick}
                className="primary-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
              Log In
              </motion.button>
            )}
          </ul>
        </div>

        <div className="lg:hidden">
          <IoMdMenu className="text-4xl text-dark" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
