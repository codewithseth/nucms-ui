import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 md:flex md:justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
        <div className="flex justify-center mt-4 md:mt-0 space-x-8">
          <Link to="#" className="text-gray-300 hover:text-gray-100 transition">
            Privacy Policy
          </Link>
          <Link to="#" className="text-gray-300 hover:text-gray-100 transition">
            Terms of Service
          </Link>
          <Link to="#" className="text-gray-300 hover:text-gray-100 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
