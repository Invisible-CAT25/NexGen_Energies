import React from "react";
import HighlightText from "../common/HighlightText";
import { motion } from "framer-motion";

const SectionTemplate = ({ active = false, name, description, image}) => {
  return (
    <section className="w-11/12 mx-auto mt-20">
      <div
        className={`flex flex-col lg:flex-row items-center justify-center gap-8 ${
          active ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-[40%]"
          initial={{ opacity: 0, x: active ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img
            src={image}
            alt="Project Preview"
            loading="lazy"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-[60%] flex flex-col gap-5"
          initial={{ opacity: 0, x: active ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-bold">
            <HighlightText text={name} />
          </h2>

          <p className="text-sm text-[#6C6969] leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTemplate;
