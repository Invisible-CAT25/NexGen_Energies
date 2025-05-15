import React, { useState } from "react";
import logo from "../../assets/images/logo.png"
import { NavbarLinks } from "../../data/navbar-links";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <div
      className={`flex h-18 items-center justify-center transition-all duration-200`}
    >
      <div className="flex w-11/12 items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-x-8 text-black font-semibold">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                  <Link to={link?.path}>
                    <p>
                      {link.title}
                    </p>
                  </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-black"
          >
            {isMobileMenuOpen ? (
              <HiOutlineX size={24} />
            ) : (
              <HiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-18 left-0 w-full bg-black/50 px-6 py-4 text-white lg:hidden z-[999]">
          <ul className="flex flex-col gap-4 font-semibold">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;