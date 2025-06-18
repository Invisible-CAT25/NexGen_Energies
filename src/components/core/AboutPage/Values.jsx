import React from "react";
import { motion } from "framer-motion";
import HighlightText from "../../common/HighlightText";

import e from "../../../assets/images/About_Assets/e.png";
import t from "../../../assets/images/About_Assets/t.png";
import h from "../../../assets/images/About_Assets/h.png";
import i from "../../../assets/images/About_Assets/i.png";
import c from "../../../assets/images/About_Assets/c.png";
import a from "../../../assets/images/About_Assets/a.png";
import l from "../../../assets/images/About_Assets/l.png";

const values = [
  {
    title: "Empowerment",
    icon: e,
    description:
      "By empowering every team member, we fuel innovation, encourage bold ideas, value every voice and drive collective success.",
  },
  {
    title: "Team Work",
    icon: t,
    description:
      "Collaboration fuels our teamwork, helping us harness diverse ideas and achieve powerful outcomes together.",
  },
  {
    title: "Honesty",
    icon: h,
    description:
      "Integrity builds trust, strengthens partnerships, and shapes our reputation through honesty and accountability.",
  },
  {
    title: "Innovative",
    icon: i,
    description:
      "Innovation drives progress. By fostering creativity, agility, and forward-thinking, we meet evolving needs with impactful, future-ready solutions.",
  },
  {
    title: "Customer-Centric",
    icon: c,
    description:
      "Clients are our core. By prioritizing their evolving needs and exceeding expectations, we build trusted relationships that drive meaningful growth.",
  },
  {
    title: "Accountability",
    icon: a,
    description:
      "Owning our actions end-to-end strengthens culture, deepens stakeholder trust, and fuels promise-driven performance. Accountability is our foundation.",
  },
  {
    title: "Limitless",
    icon: l,
    description:
      "We believe in growth without boundaries. By fostering a limitless mindset, we challenge ourselves to push for excellence and explore new possibilities.",
  },
];

const Values = () => {
  return (
    <section
      className="w-full mt-20 flex flex-col items-center"
      aria-labelledby="our-values-heading"
    >
      <div className="w-11/12 max-w-7xl mx-auto">
        <h2
        id="our-values-heading"
        className="text-3xl md:text-[2.5rem] font-bold text-center mb-8"
      >
        <HighlightText text="Our Values" />
        </h2>

        <div className="flex flex-col md:flex-row  gap-12 ">
          {/* Vertical Label */}
          <motion.div
            className="w-[300px] bg-gradient-to-b from-[#5078B9] to-[#4BBB93] text-white font-semibold text-8xl px-6 py-12 rounded-2xl text-center hidden md:flex flex-col items-center gap-8 justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            aria-hidden="true"
            id="value-banner"
          >
            {"ETHICAL".split("").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </motion.div>

          {/* Values List */}
          <div className="flex-1 grid gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-8 justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-[50px] h-[50px] flex-shrink-0">
                  <img
                    src={value.icon}
                    alt={`${value.title} icon`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-gray-600 text-base">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>  
    </section>
  );
};

export default Values;