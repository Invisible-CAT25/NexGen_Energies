import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { NavbarLinks } from "../../data/navbar-links";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto flex h-16 w-11/12 max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Company Logo"
            width={140}
            height={20}
            loading="lazy"
            decoding="async"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block" aria-label="Main navigation" role="navigation">
          <ul className="flex gap-x-8 font-semibold text-gray-800">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link?.path}
                  className={`transition-colors duration-200 hover:text-richblue ${
                    location.pathname === link?.path ? "text-richblue" : ""
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="text-gray-900 focus:outline-none focus:ring-2 focus:ring-richblue rounded"
          >
            {isMobileMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with smooth animation */}
      <div
        className={`lg:hidden px-6 transition-all duration-300 ease-in-out transform origin-top ${
          isMobileMenuOpen
            ? "max-h-96 scale-y-100 opacity-100 py-4"
            : "max-h-0 scale-y-95 opacity-0 py-0"
        } overflow-hidden bg-white shadow-md`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav aria-label="Mobile navigation" role="navigation">
          <ul className="flex flex-col gap-4 text-base font-medium text-gray-800">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`block transition-colors duration-200 hover:text-richblue ${
                    location.pathname === link.path ? "text-richblue" : ""
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
