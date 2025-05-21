import React from "react";
import { motion } from "framer-motion";
import headerImage from "../../../assets/images/About_Assets/headerImage.png";

const FinancialHeroSection = () => {
  return (
    <section
      className="w-full h-[24rem] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${headerImage})` }}
      role="region"
      aria-label="About NexGen Energies Hero"
    >
      <motion.h1
        className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          textShadow: "0px 6px 4px rgba(0, 128, 0, 0.3)",
        }}
      >
        Financial Solutions
      </motion.h1>
    </section>
  );
};

export default FinancialHeroSection;
