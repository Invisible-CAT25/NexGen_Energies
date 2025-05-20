import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Financial Solutions", href: "/financial-solutions" },
];

const offices = [
  "Haryana", "Rajasthan", "Madhya Pradesh", "Maharashtra", "Bihar", "Jharkhand", "Chhattisgarh"
];

const FooterMD = () => {
  return (
    <motion.footer
      className="bg-white text-gray-800 border-t border-gray-200 mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-11/12 max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo and Tagline */}
          <div>
            <img
              src={logo}
              alt="NexGen Energies Logo"
              className="mb-4"
              width={160}
              height={32}
              loading="lazy"
            />
            <p className="font-semibold text-lg leading-relaxed">
              The Green Future <br /> Flows with Us
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-green-600 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="font-bold text-lg mb-3">Our Offices</h3>
            <ul className="space-y-2">
              {offices.map((office, idx) => (
                <li key={idx} className="text-gray-700">{office}</li>
              ))}
            </ul>
          </div>

          {/* Contact Icons */}
          <div>
            <h3 className="font-bold text-lg mb-3">Get In Touch</h3>
            <div className="flex items-center gap-4 mt-2">
              <a href="mailto:info@nexgen.com" aria-label="Email" className="text-gray-600 hover:text-green-600 transition">
                <FaEnvelope className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-blue-700 transition"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} NexGen Energies. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterMD;
