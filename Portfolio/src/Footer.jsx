import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-80 mt-10  py-12">
      {/* Catchy Line */}
      <div>
        <p className="text-7xl text-white font-bold text-center  p-6 transition-colors duration-300 ">
          From Console to Cloud – I Build It All ☁️
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center justify-center text-white gap-10 mt-8">
        <a
          href="https://github.com/Mohit9891"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl  transition-transform duration-300 hover:text-blue-900 hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/mohit-prajapati-484a40275"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl  transition-transform duration-300 hover:text-blue-900 hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl  transition-transform duration-300 hover:text-blue-900 hover:scale-110"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl  transition-transform duration-300 hover:text-blue-900 hover:scale-110"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
