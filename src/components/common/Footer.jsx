import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div>
            <img src={logo} alt="NexGen Energies Logo" className="mb-4" width={160} height={32} />
            <p className="font-semibold text-xl">The Green Future Flows with Us</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-2">Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/financial-solutions" className="hover:underline">Financial Solutions</a></li>
            </ul>
          </div>

          {/* Our Offices */}
          <div>
            <h3 className="font-bold text-xl mb-2">Our Offices</h3>
            <ul className="space-y-2 text-base">
              {["Haryana", "Rajasthan", "Madhya Pradesh", "Maharashtra", "Bihar", "Jharkhand", "Chhattisgarh"].map((office, idx) => (
                <li key={idx}>{office}</li>
              ))}
            </ul>
          </div>

          {/* Contact Icons */}
          <div>
            <h3 className="font-bold text-xl mb-2">Get In Touch</h3>
            <div className="flex items-center space-x-4 mt-2">
              <a href="mailto:info@nexgen.com" aria-label="Email">
                <FaEnvelope className="text-2xl hover:text-green-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} NexGen Energies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;