import React from "react";

const HighlightText = ({ text }) => {
  return (
    <span
      className="bg-gradient-to-r from-richblue to-richgreen text-transparent bg-clip-text font-semibold text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight"
      aria-label={text}
      role="text"
    >
      {text}
    </span>
  );
};

export default HighlightText;
