import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Financial Solutions", href: "/financial-solutions" },
];

const offices = [
  "Haryana", "Delhi-NCR", "Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttrakhand", "Andhra Pradesh"
];

const offices2 = [
  "Telangana", "West Bengal", "Odisha", "Jharkhand", "Chhattisgarh", "Bihar", "Uttar Pradesh"
]

const Footer = () => {
  return (
    <motion.footer
      className="bg-white text-gray-800 border-t border-gray-200 mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-11/12 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-10">
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
            <h3 className="font-bold text-lg mb-3">Our Presence</h3>
            <ul className="space-y-2">
              {offices.map((office, idx) => (
                <li key={idx} className="text-gray-700">{office}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="hidden md:mb-10 md:block"></div>
            <ul className="space-y-2">
              {offices2.map((office, idx) => (
                <li key={idx} className="text-gray-700">{office}</li>
              ))}
            </ul>
          </div>

          {/* Contact Icons */}
          <div>
            <h3 className="font-bold text-lg mb-3">Get In Touch</h3>
            <div className="flex items-center gap-4 mt-2">
              <a href="mailto:info@nexgenenergies.co.in" aria-label="Email" className="text-gray-600 hover:text-richgreen transition">
                <FaEnvelope className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/nexgen-energies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-richblue transition"
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

export default Footer;
