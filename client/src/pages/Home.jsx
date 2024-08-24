import React from 'react';
import herosectionimg from '../images/herosectionimg.jpg';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <header className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={herosectionimg}
            alt="Architectural Design"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 py-32 flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold leading-tight mb-4 text-yellow-400">
            Innovative Architectural Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transforming visions into exceptional spaces with cutting-edge design and unparalleled craftsmanship. We create environments that inspire, delight, and endure.
          </p>
          <a
            href="#about"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Discover More
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Expertise</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Residential Design</h3>
                <p className="text-gray-700 mb-6">Crafting elegant and functional homes tailored to modern living and personal taste.</p>
                <a
                  href="#about"
                  className="text-yellow-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Commercial Design</h3>
                <p className="text-gray-700 mb-6">Designing impactful commercial spaces that drive business success and foster creativity.</p>
                <a
                  href="#about"
                  className="text-yellow-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Urban Planning</h3>
                <p className="text-gray-700 mb-6">Innovative planning strategies for sustainable and vibrant urban environments.</p>
                <a
                  href="#about"
                  className="text-yellow-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 mb-4">
                  "The team at Architect Shop transformed our vision into a stunning reality. Their attention to detail and commitment to excellence exceeded our expectations."
                </p>
                <p className="font-semibold text-gray-800">Jane Doe</p>
                <p className="text-gray-600">Homeowner</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 mb-4">
                  "From concept to completion, their professionalism and creativity made the entire process smooth and enjoyable. Highly recommended!"
                </p>
                <p className="font-semibold text-gray-800">John Smith</p>
                <p className="text-gray-600">Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We are a dedicated team of architects and designers passionate about creating spaces that blend form and function. With a rich history of successful projects and a commitment to innovation, we transform ideas into architectural masterpieces that stand the test of time.
          </p>
          <a
            href="#services"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-lg mb-4">Have a project in mind or just want to say hello? We'd love to hear from you.</p>
          <a
            href="mailto:info@architectshop.com"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Email Us
          </a>
          <div className="mt-6">
            <p>&copy; 2024 Architect Shop. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18m-9 5h9"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10h10M7 14h10"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

