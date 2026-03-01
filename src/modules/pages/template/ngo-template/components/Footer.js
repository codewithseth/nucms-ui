import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
                <div className="flex justify-center mt-4 space-x-4">
                    <Link to="#" className="text-white hover:text-gray-400">
                        Privacy Policy
                    </Link>
                    <Link to="#" className="text-white hover:text-gray-400">
                        Terms of Service
                    </Link>
                    <Link to="#" className="text-white hover:text-gray-400">
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
