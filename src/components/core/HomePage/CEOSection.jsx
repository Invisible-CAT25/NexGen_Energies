import React from "react";
import CEOImage from "../../../assets/images/Home_Assets/ceo.png";
import bgImage from "../../../assets/images/Home_Assets/ceo_bgImage.png";
import Icon from "../../../assets/images/Home_Assets/ceo_symbol.png";
import Button from "../../common/Button";
import { motion } from "framer-motion";

const CEOSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat text-white mt-20 pt-16"
      style={{ backgroundImage: `url(${bgImage})` }}
      role="region"
      aria-label="CEO Introduction Section"
    >
      <div className="flex flex-col-reverse lg:flex-row items-end justify-between w-11/12 mx-auto lg:gap-10 px-4 md:px-8">
        {/* Text Content */}
        <motion.div
          className="bg-[#5078B9] w-full lg:w-1/2 rounded-md p-6 relative shadow-lg flex flex-col gap-6 -bottom-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {/* Decorative Icon */}
          <img
            src={Icon}
            alt="NexGen logo icon"
            className="absolute -top-6 -left-6 hidden lg:block w-16 h-16"
            loading="lazy"
          />

          {/* Name and Role */}
          <div className="mt-10 border-l-4 border-white pl-4">
            <h3 className="text-4xl sm:text-5xl font-bold leading-tight">NEERAJ KUMAR</h3>
            <p className="text-xl sm:text-2xl font-semibold mt-1">CEO</p>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-[17px] leading-relaxed">
            With over a decade of experience in renewable energy and power infrastructure, the founding force behind NexGen Energies leads with a clear vision for sustainable transformation. Focused on innovation and strategic growth, the leadership has driven the company to the forefront of solar and transmission solutions across India.
            <br />
            A strong believer in clean technology, the role emphasizes building future-ready systems that support both industry and environment. The journey continues with a commitment to excellence, impact, and long-term value creation.
          </p>

          {/* Button */}
          <Button linkto="/our-leaderships">Know More</Button>
        </motion.div>

        {/* CEO Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img
            src={CEOImage}
            alt="CEO Neeraj Kumar - NexGen Energies"
            className="w-full max-w-md object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CEOSection;
