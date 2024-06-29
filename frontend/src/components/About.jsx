import React from 'react';
import img from '../assets/images/about.jpeg';
import { FaMusic, FaUsers, FaStar, FaTicketAlt } from 'react-icons/fa';
import { MdOutlineRecommend } from 'react-icons/md';
import '../css/style.css'

const About = () => {
  return (
    <div className="min-h-screen ">
      
      {/* About Us Section */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 text-gray-200">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 animate-slideIn">
              About VibeLive
            </h2>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="flex-1 mb-8 md:mb-0">
                <p className="text-lg md:text-xl leading-relaxed animate-fadeIn">
                  At VibeLive, we're passionate about revolutionizing the live
                  music experience. Our platform is designed to bridge the gap
                  between artists and fans, providing a richer, more interactive
                  way to connect through music.
                </p>
              </div>
              <div className="flex-1 animate-zoomIn">
                <img
                  src={img}
                  alt="About Us Image"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="mt-12 animate-fadeIn">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-lg md:text-xl leading-relaxed">
                Our mission is to empower musicians and fans alike by creating
                a seamless digital stage where artists can showcase their talent
                and fans can experience live music like never before.
              </p>
            </div>

            <div className="mt-12 animate-fadeIn">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Core Features
              </h3>
              <ul className="text-lg md:text-xl list-disc list-inside space-y-4">
                <li className="flex items-start">
                  <FaUsers className="text-blue-500 mr-2 mt-1" />
                  User Authentication and Authorization
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-2 mt-1" />
                  Personalized User Profiles
                </li>
                <li className="flex items-start">
                  <FaMusic className="text-blue-500 mr-2 mt-1" />
                  Live Music Streaming and Real-Time Interaction
                </li>
                <li className="flex items-start">
                  <MdOutlineRecommend className="text-green-500 mr-2 mt-1" />
                  Event Discovery with AI-powered Recommendations
                </li>
                <li className="flex items-start">
                  <FaTicketAlt className="text-red-500 mr-2 mt-1" />
                  Secure Ticketing System for Events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
