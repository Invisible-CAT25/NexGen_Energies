import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-2xl text-white rounded-xl font-bold bg-[#4BBB93] transition-all duration-200 hover:bg-[#5078B9] hover:scale-95 px-4 py-3
        ${active ? "mt-4" : ""}`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
