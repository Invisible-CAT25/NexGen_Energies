import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="bg-gradient-to-r from-[#5078B9] to-[#4BBB93] text-transparent bg-clip-text font-semibold text-[2.5rem]">
      {text}
    </span>
  );
};

export default HighlightText;
