import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import heroImage from "../../../assets/images/Home_Assets/hero_image.png";
import Button from "../../common/Button";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section showcasing our commitment to green energy"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Solar panels and wind turbines representing green energy"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"></div> */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Animated Content */}
      <motion.div
        ref={ref}
        className="relative z-20 mx-auto w-11/12 max-w-7xl mt-8 px-4 md:px-8 flex flex-col items-start justify-center"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 [text-wrap:balance] text-white"
          style={{ textShadow: "0px 4px 4px rgba(75, 187, 147, 1)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          The Green Energy <span className="block">Flows With Us</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button
            linkto="/about-us"
            active={true}
            aria-label="Learn more about our company"
          >
            Know More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
