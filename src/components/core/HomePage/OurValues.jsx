import React from "react";
import Button from "../../common/Button";
import { motion } from "framer-motion";

// Value icons
import e_logo from "../../../assets/images/Home_Assets/e.svg";
import t_logo from "../../../assets/images/Home_Assets/l.svg";
import h_logo from "../../../assets/images/Home_Assets/t.svg";
import i_logo from "../../../assets/images/Home_Assets/h.svg";
import c_logo from "../../../assets/images/Home_Assets/i.svg";
import a_logo from "../../../assets/images/Home_Assets/c.svg";
import l_logo from "../../../assets/images/Home_Assets/a.svg";

// Core values content
const values = [
  { letter: "E", icon: e_logo, label: "Empowerment", right: "right-12" },
  { letter: "T", icon: t_logo, label: "Team Work", right: "right-10" },
  { letter: "H", icon: h_logo, label: "Honesty", right: "right-18" },
  { letter: "I", icon: i_logo, label: "Innovative", right: "right-5" },
  { letter: "C", icon: c_logo, label: "Customer-Centric", right: "right-19" },
  { letter: "A", icon: a_logo, label: "Accountability", right: "right-16" },
  { letter: "L", icon: l_logo, label: "Limitless", right: "right-11" },
];

const OurValues = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center gap-10 mt-24"
      role="region"
      aria-label="NexGen Energies Core Values"
    >
      {/* Gradient BG Section */}
      <div className="w-full bg-gradient-to-r from-[#5078B9] via-[#4BBB93] to-[#5078B9] py-12">
        <div className="w-11/12 mx-auto flex flex-col items-center gap-8">
          <h2 className="text-white text-center text-[2.5rem] font-semibold">
            Our Core Values
          </h2>

          {/* Grid of values */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 w-full ">
            {values.map((val, index) => (
              <motion.div
                key={val.label}
                className="flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <div className="relative flex items-center justify-center">
                  {/* Circle with icon */}
                  <div className={`absolute ${val.right} bg-gradient-to-b from-[#5078B9] to-[#4BBB93] rounded-full w-12 h-12 flex justify-center items-center`}>
                    <img
                      src={val.icon}
                      alt={`${val.label} icon`}
                      className="w-8 h-8"
                      loading="lazy"
                    />
                  </div>

                  {/* Large Letter */}
                  <p className="text-9xl font-bold text-white">{val.letter}</p>
                </div>

                {/* Label */}
                <p className="text-white text-center mt-2">{val.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <Button linkto="/about-us#our-values-heading" aria-label="View all services">
          Know More
        </Button>
      </motion.div>
    </section>
  );
};

export default OurValues;
