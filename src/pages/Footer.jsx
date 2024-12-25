import React from "react";
import { Link } from "react-scroll";

import { FaHome } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-10">
        {/* Logo and About Section */}
        <div className="space-y-4">
          <h2 className="text-gray-200 text-3xl font-bold">Elementals</h2>
          <p>Lorem Ipsum Dolor Sit Amet Aspernatur Exercitationem Fugiat.</p>
          <h3 className="text-white text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-3 ">
            <a
              href="#"
              className="bg-white p-2 rounded-full w-10 h-10 flex justify-center items-center hover:bg-green-600 "
            >
              <i className="fab fa-facebook-f  items-center text-blue-700"></i>
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full w-10 h-10 flex justify-center items-center hover:bg-green-600 "
            >
              <i className="fab fa-instagram items-center text-red-500"></i>
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full w-10 h-10 flex justify-center items-center hover:bg-green-600 "
            >
              <i className="fab fa-twitter items-center text-blue-700"></i>
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full w-10 h-10 flex justify-center items-center hover:bg-green-600 "
            >
              <i className="fab fa-youtube items-center text-red-400"></i>
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-white text-lg font-semibold">Site Map</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="Home"
                className="flex items-center hover:text-green-400 cursor-pointer"
              >
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                className="flex items-center hover:text-green-400 cursor-pointer"
              >
                <FcAbout className="mr-2" /> About
              </Link>
            </li>
            <li>
              <Link
                to="Services"
                className="flex items-center hover:text-green-400 cursor-pointer"
              >
                <GrServices className="mr-2" /> Services
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                className="flex items-center hover:text-green-400 cursor-pointer"
              >
                <MdPermContactCalendar className="mr-2  " /> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="space-y-2">
          <h3 className="text-white text-lg font-semibold">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center hover:text-green-400">
                &gt; Facebook
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-green-400">
                &gt; Instagram
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-green-400">
                &gt; LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-green-400">
                &gt; X
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="space-y-2">
          <h3 className="text-white text-lg font-semibold">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center hover:text-green-400">
                &gt; Custom Software Development
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-green-400">
                &gt; Web Development
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-green-400">
                &gt; Mobile App Development
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-green-400">
                &gt; Graphic Design
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>
          © 2024 Created By: <span className="text-green-400">Erramix</span>
        </p>
        <p className="space-x-4">
          <a href="#" className="hover:text-green-400">
            Terms Of Use
          </a>
          <span>|</span>
          <a href="#" className="hover:text-green-400">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
