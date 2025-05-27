import React from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Button = ({ children, active, linkto, ariaLabel }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      className={`inline-block ${active ? "mt-6" : ""}`}
    >
      <HashLink smooth to={linkto} aria-label={ariaLabel || "Navigation button"}>
        <button
          type="button"
          className="w-full sm:w-auto px-6 py-3 sm:py-3 sm:px-6 bg-richgreen text-white text-lg sm:text-xl font-semibold rounded-xl transition-colors duration-300 hover:bg-richblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-richgreen"
        >
          {children}
        </button>
      </HashLink>
    </motion.div>
  );
};

export default Button;

