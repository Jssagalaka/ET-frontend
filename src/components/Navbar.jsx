import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../public/logo.avif";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change navbar color after 50px of scrolling
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Services" },
    { id: 3, text: "About" },
    { id: 4, text: "Blog" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 shadow-md ${
        isScrolled ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex space-x-2">
          <img src={logo} className="h-12 w-12 rounded-full" alt="Logo" />
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="hover:scale-105 duration-200 cursor-pointer"
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-blue-500`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-900 text-white`}
        >
          {navItems.map(({ id, text }) => (
            <Link
              key={id}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
