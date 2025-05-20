import React from "react";
import { Link } from "react-router-dom";

const ServiceBtn = ({ children, linkto, ariaLabel }) => {
  return (
    <Link to={linkto} aria-label={ariaLabel || children}>
      <div
        className="text-center text-sm sm:text-base md:text-lg text-black font-semibold rounded-xl bg-white px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 ease-in-out transform hover:scale-95 hover:bg-[#f0f0f0] shadow-md"
      >
        {children}
      </div>
    </Link>
  );
};

export default ServiceBtn;
