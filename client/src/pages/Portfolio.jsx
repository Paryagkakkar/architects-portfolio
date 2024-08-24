import React, { useState } from 'react';
import { FaCamera, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaCommentDots, FaClipboardList } from 'react-icons/fa';
import portfolioimg from '../images/portfolioimg.png'
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Modern Office Building',
      description: 'A sleek and modern office space designed for productivity and comfort.',
      image: 'https://source.unsplash.com/1600x900/?office-building',
      details: 'Detailed view of the modern office building showcasing innovative workspace solutions and sustainable design elements.',
      client: 'TechCorp Solutions',
      location: 'New York, NY',
      year: 2023
    },
    {
      id: 2,
      title: 'Luxury Residential Home',
      description: 'An elegant residential design combining luxury with functionality.',
      image: 'https://source.unsplash.com/1600x900/?luxury-home',
      details: 'A comprehensive look at the luxury residential home with high-end finishes and custom design features.',
      client: 'The Johnson Family',
      location: 'Beverly Hills, CA',
      year: 2022
    },
    {
      id: 3,
      title: 'Contemporary Urban Space',
      description: 'A modern urban design project focusing on sustainability and innovation.',
      image: 'https://source.unsplash.com/1600x900/?urban-space',
      details: 'Explore the contemporary urban space featuring green building techniques and cutting-edge architectural styles.',
      client: 'City Development Authority',
      location: 'San Francisco, CA',
      year: 2024
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={portfolioimg}
            alt="Architectural Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 py-32 text-center">

        </div>
      </header>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <div key={project.id} className="w-full md:w-1/3 p-4">
                <div
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  onClick={() => handleProjectClick(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <a
                      href="/"
                      className="text-blue-600 hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        handleProjectClick(project);
                      }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={handleCloseModal}
            >
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover object-center mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-700 mb-4">{selectedProject.details}</p>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-600">{selectedProject.location}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-600">Year: {selectedProject.year}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaStar className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-600"><strong>Client:</strong> {selectedProject.client}</p>
            </div>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300"
              onClick={handleCloseModal}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <FaCommentDots className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
                <p className="text-gray-700 mb-4">
                  "The team at [Architectural Firm] did an exceptional job with our office space. Their attention to detail and creativity truly transformed our workspace."
                </p>
                <p className="font-semibold">Jane Doe</p>
                <p className="text-gray-600">CEO, TechCorp Solutions</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <FaCommentDots className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
                <p className="text-gray-700 mb-4">
                  "Our new home designed by [Architectural Firm] exceeded our expectations. The quality and attention to detail are second to none."
                </p>
                <p className="font-semibold">John Smith</p>
                <p className="text-gray-600">Homeowner</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <FaCommentDots className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
                <p className="text-gray-700 mb-4">
                  "The innovative design solutions provided by [Architectural Firm] were instrumental in achieving our vision. Highly recommended!"
                </p>
                <p className="font-semibold">Alice Johnson</p>
                <p className="text-gray-600">Project Manager, City Development Authority</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
