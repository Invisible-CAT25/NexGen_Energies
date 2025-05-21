import React from "react";
import HighlightText from "../../common/HighlightText";
import solarImage from "../../../assets/images/Home_Assets/solar_service.png";
import transmissionImage from "../../../assets/images/Home_Assets/transmission_service.png";
import ServiceBtn from "./ServiceBtn";
import Button from "../../common/Button";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section
      className="w-11/12 max-w-7xl mx-auto flex flex-col items-center gap-12 mt-24"
      role="region"
      aria-label="Our services section"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-[2.5rem] font-semibold text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <HighlightText text="Our Services" />
      </motion.h2>

      {/* Renewable Energy Block */}
      <motion.div
        className="w-full h-[22rem] bg-cover bg-center sm:bg-[length:100%_100%] flex items-end justify-start text-white p-6 rounded-xl shadow-md overflow-hidden relative"
        style={{ backgroundImage: `url(${solarImage})` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: false }}
        role="region"
        aria-label="Renewable energy services"
      >
        <div className="z-10 flex flex-col justify-between h-full">
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            style={{ textShadow: "0px 4px 4px rgba(80, 120, 185, 1)" }}
          >
            Renewable Energy
          </h3>

          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <ServiceBtn linkto="/financial-solutions">OPEX Model</ServiceBtn>
            <ServiceBtn linkto="/financial-solutions">CAPEX Model</ServiceBtn>
            <ServiceBtn linkto="/financial-solutions">Deferred CAPEX Model</ServiceBtn>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0 rounded-xl" aria-hidden="true" />
      </motion.div>

      {/* Power Transmission Block */}
      <motion.div
        className="w-full h-[22rem] bg-cover bg-center sm:bg-[length:100%_100%] flex items-end justify-end text-white p-6 rounded-xl shadow-md overflow-hidden relative"
        style={{ backgroundImage: `url(${transmissionImage})` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: false }}
        role="region"
        aria-label="Power transmission services"
      >
        <div className="z-10 flex flex-col items-end justify-between h-full">
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-right"
            style={{ textShadow: "0px 4px 4px rgba(80, 120, 185, 1)" }}
          >
            Power Transmission
          </h3>

          <ServiceBtn linkto="/financial-solutions">Power and Civil Services</ServiceBtn>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0 rounded-xl" aria-hidden="true" />
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <Button linkto="/services" aria-label="View all services">
          Know More
        </Button>
      </motion.div>
    </section>
  );
};

export default ServicesSection;