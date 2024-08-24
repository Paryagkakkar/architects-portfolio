import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail,MdDesignServices } from 'react-icons/md';
import { FiTarget, FiUsers } from 'react-icons/fi';
import { IoMdConstruct } from 'react-icons/io';
import { AiOutlineAppstore } from 'react-icons/ai';

const AboutUs = () => {
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
          <h1 className="text-5xl font-bold leading-tight mb-4">About Chugh Architect</h1>
          <p className="text-lg mb-8">
            Discover the story behind Chugh Architect, our team, our mission, and the values that drive us to deliver exceptional architectural solutions.
          </p>
        </div>
      </header>

      {/* Firm Overview Section */}
      <section id="firm-overview" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Firm Overview</h2>
          <p className="text-lg mb-8">
            Chugh Architect is a leading architectural firm known for its innovative designs and commitment to excellence. Established in [Year], we have been transforming spaces and creating remarkable structures that blend functionality with aesthetic appeal.
          </p>
          <p className="text-lg mb-8">
            Our portfolio includes a diverse range of projects, from residential to commercial, urban planning to sustainable design. Each project is approached with a unique vision and meticulous attention to detail, ensuring that every client’s needs and aspirations are met.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="flex flex-wrap -m-4">
            {/* Team Member 1 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <FiUsers className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Jane Chugh</h3>
                <p className="text-gray-700 mb-4">Principal Architect</p>
                <p className="text-gray-600">
                  Jane Chugh, the visionary behind Chugh Architect, has over 20 years of experience in architectural design. Her innovative approach and commitment to quality have shaped the firm's reputation for excellence.
                </p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <IoMdConstruct className="w-12 h-12 text-green-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Mark Patel</h3>
                <p className="text-gray-700 mb-4">Lead Designer</p>
                <p className="text-gray-600">
                  Mark Patel brings a fresh perspective to our design team with his expertise in modern architectural techniques and sustainable practices.
                </p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <AiOutlineAppstore className="w-12 h-12 text-red-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Emma Lee</h3>
                <p className="text-gray-700 mb-4">Project Manager</p>
                <p className="text-gray-600">
                  Emma Lee is our dedicated project manager, ensuring that each project is delivered on time and within budget while maintaining the highest standards of quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section id="mission-values" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Mission & Values</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                <FiTarget className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-300 mb-4">
                  Our mission is to design spaces that inspire and enhance the lives of our clients and communities. We strive to achieve excellence through creativity, innovation, and a deep understanding of our client's needs.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                <MdDesignServices className="w-12 h-12 text-pink-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <p className="text-gray-300 mb-4">
                  We are committed to integrity, collaboration, and sustainability. Our values guide our work ethic, ensuring that every project we undertake meets the highest standards of quality and environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-12">
            We would love to hear from you! Whether you have a question, need more information, or want to discuss a potential project, feel free to reach out to us.
          </p>
          <div className="flex justify-center mb-8">
            <FaMapMarkerAlt className="w-6 h-6 text-blue-600 mr-4" />
            <p className="text-lg">123 Architecture Lane, Design City, DC 45678</p>
          </div>
          <a
            href="mailto:contact@chugharchitect.com"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
          >
            <MdEmail className="inline-block w-6 h-6 mr-2" />
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
