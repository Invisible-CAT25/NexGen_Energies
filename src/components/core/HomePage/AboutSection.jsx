import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../../common/Button";
import solarImage from "../../../assets/images/Home_Assets/solar_and_transmission.png";
import HighlightText from "../../common/HighlightText";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      className="w-full py-20 bg-white text-gray-800"
      aria-label="About NexGen Energies and our solar solutions"
      role="region"
    >
      <motion.div
        ref={ref}
        className="flex flex-col lg:flex-row items-center justify-between gap-12 w-11/12 max-w-7xl mx-auto px-4 md:px-8"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <motion.div
          className="lg:w-[40%] w-full"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src={solarImage}
            alt="Solar panels and power transmission lines"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="lg:w-[55%] flex flex-col gap-6"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
            <HighlightText text="Shaping a Sustainable Future with Solar & Power Solutions" />
          </h2>

          <p className="text-[17px] text-[#6C6969] leading-relaxed">
            Make your space sustainable and power the future with NexGen Energies.
            With deep expertise in renewable energy and power transmission, we provide
            complete solutions including planning, design, execution and maintenance
            for solar and energy infrastructure projects. <br /><br />
            From rooftop systems to large-scale solar plants and strong power transmission
            networks, we are committed to reducing carbon emissions and building a
            sustainable tomorrow.
          </p>

          <div className="w-fit">
            <Button linkto="/about-us" ariaLabel="Learn more about NexGen Energies">
              Know More
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
