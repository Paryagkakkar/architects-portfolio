import React from 'react';
import { FaBuilding, FaDraftingCompass, FaRegHandshake, FaLeaf, FaArchway, FaClipboardList } from 'react-icons/fa';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://source.unsplash.com/1600x900/?architecture"
            alt="Architectural Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">Our Architectural Services</h1>
          <p className="text-lg mb-8">
            Explore the comprehensive range of services we offer to bring your architectural vision to life. Our expertise spans across various domains, ensuring that your project is handled with the highest level of professionalism and creativity.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="flex flex-wrap -m-4">
            {/* Service 1 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <FaBuilding className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Architectural Design</h3>
                <p className="text-gray-700 mb-4">
                  Our architectural design services include the creation of innovative and functional designs that meet your specific needs and preferences. We provide comprehensive services from initial concept sketches to detailed construction drawings.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Key Features:</strong> Conceptual Design, 3D Visualization, Site Analysis, and Full Construction Documents.
                </p>
                <a href="#contact" className="text-blue-600 hover:underline">
                  Learn More
                </a>
              </div>
            </div>
            {/* Service 2 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <FaDraftingCompass className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Interior Design</h3>
                <p className="text-gray-700 mb-4">
                  Our interior design services focus on creating harmonious and aesthetically pleasing spaces that reflect your style and enhance functionality. We offer design solutions for residential, commercial, and hospitality interiors.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Key Features:</strong> Space Planning, Furniture Selection, Lighting Design, and Color Schemes.
                </p>
                <a href="#contact" className="text-blue-600 hover:underline">
                  Learn More
                </a>
              </div>
            </div>
            {/* Service 3 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <FaRegHandshake className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Project Management</h3>
                <p className="text-gray-700 mb-4">
                  Our project management services ensure that your project runs smoothly from start to finish. We handle all aspects of the project, including budgeting, scheduling, and contractor coordination, to deliver your project on time and within budget.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Key Features:</strong> Budgeting, Scheduling, Contractor Management, and Quality Control.
                </p>
                <a href="#contact" className="text-blue-600 hover:underline">
                  Learn More
                </a>
              </div>
            </div>
            {/* Service 4 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <FaLeaf className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Sustainable Design</h3>
                <p className="text-gray-700 mb-4">
                  Our sustainable design services focus on creating eco-friendly and energy-efficient buildings. We implement green building practices and technologies to minimize environmental impact and reduce operating costs.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Key Features:</strong> Energy Efficiency, Sustainable Materials, Water Conservation, and LEED Certification.
                </p>
                <a href="#contact" className="text-blue-600 hover:underline">
                  Learn More
                </a>
              </div>
            </div>
            {/* Service 5 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <FaArchway className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Urban Planning</h3>
                <p className="text-gray-700 mb-4">
                  Our urban planning services focus on designing functional and aesthetically pleasing urban environments. We work on projects ranging from city master plans to public spaces, ensuring they meet the needs of communities while enhancing urban aesthetics.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Key Features:</strong> Master Planning, Zoning Analysis, Public Space Design, and Infrastructure Planning.
                </p>
                <a href="#contact" className="text-blue-600 hover:underline">
                  Learn More
                </a>
              </div>
            </div>
            {/* Service 6 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <FaClipboardList className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Consulting Services</h3>
                <p className="text-gray-700 mb-4">
                  Our consulting services provide expert advice and solutions for various architectural challenges. We offer strategic insights and practical recommendations to help you achieve your design and project goals effectively.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Key Features:</strong> Design Consultation, Feasibility Studies, Regulatory Compliance, and Risk Management.
                </p>
                <a href="#contact" className="text-blue-600 hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-12">
            Interested in working with us? Reach out to discuss your project or get more information about our services. We're here to help you bring your architectural vision to life.
          </p>
          <a
            href="mailto:contact@architecturalfirm.com"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
