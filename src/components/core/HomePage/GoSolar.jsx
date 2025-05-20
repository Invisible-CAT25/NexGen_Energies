import React from "react";
import HighlightText from "../../common/HighlightText";
import solarImage from "../../../assets/images/Home_Assets/go_solar.png";
import Logo1 from "../../../assets/images/Home_Assets/go_solar_logo1.png";
import Logo2 from "../../../assets/images/Home_Assets/go_solar_logo_2.png";
import Logo3 from "../../../assets/images/Home_Assets/go_solar_logo3.png";
import Logo4 from "../../../assets/images/Home_Assets/go_solar_logo4.png";
import { motion } from "framer-motion";

const timeline = [
  {
    Logo: Logo1,
    Heading: "Turn Sunlight Into Savings",
    Description:
      "Slash your electricity bills to zero and earn by selling surplus solar energy back to the grid.",
  },
  {
    Logo: Logo2,
    Heading: "Government-Backed Subsidy",
    Description:
      "Get up to 40% subsidy on your solar installation as per official government norms.",
  },
  {
    Logo: Logo3,
    Heading: "Support a Greener Tomorrow",
    Description:
      "Installing just 1kW of solar can help preserve 154+ trees and eliminate over 20 tons of carbon emissions.",
  },
  {
    Logo: Logo4,
    Heading: "Smart Investment, Quick Returns",
    Description:
      "Recover your investment within 3 to 4 years and enjoy uninterrupted savings for years to come.",
  },
];

const GoSolar = () => {
  return (
    <section
      className="w-11/12 mx-auto flex flex-col justify-center items-center gap-12 mt-24"
      role="region"
      aria-label="Reasons to go solar"
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <HighlightText text="Why Go Solar?" />
      </motion.h2>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 items-center w-full max-w-7xl">
        {/* Left Image */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img
            src={solarImage}
            alt="Go solar and save"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </motion.div>

        {/* Right Timeline Content */}
        <motion.div
          className="lg:w-1/2 w-full flex flex-col gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="min-w-[80px] h-[80px] flex justify-center items-center">
                <img
                  src={item.Logo}
                  alt={item.Heading}
                  className="w-16 h-16 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{item.Heading}</h3>
                <p className="text-base text-gray-700">{item.Description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GoSolar;
