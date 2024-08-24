import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-3xl font-bold text-white hover:text-gray-300 transition duration-300">
            Architect Shop
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/services"
            className="text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} aria-label="Toggle menu" className="md:hidden text-white hover:text-gray-300 transition duration-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 border-t border-gray-600 transition-transform transform scale-100">
          <Link
            to="/"
            className="block px-4 py-2 text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="block px-4 py-2 text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
