import React from "react";
import { Link } from "react-router-dom";

const ServiceBtn = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-black rounded-xl font-bold bg-white transition-all duration-200 hover:scale-95 px-4 py-3
        ${active ? "mt-4" : ""}`}
      >
        {children}
      </div>
    </Link>
  );
};

export default ServiceBtn;
