import React from "react";
import { motion } from "framer-motion";
import Icon1 from "../../../assets/images/Home_Assets/subLogo1.svg";
import Icon2 from "../../../assets/images/Home_Assets/subLogo2.svg";
import Icon3 from "../../../assets/images/Home_Assets/subLogo3.svg";

const features = [
  {
    icon: Icon2,
    title: "Our Vision",
    description:
      "To lead the way in clean energy by advancing renewable innovation and reliable power transmission for a sustainable planet.",
  },
  {
    icon: Icon1,
    title: "Our Mission",
    description:
      "Powering a greener future with clean energy and strong transmission, while reducing carbon emissions for a sustainable tomorrow.",
  },
  {
    icon: Icon3,
    title: "Our Goal",
    description:
      "Achieve 10 GW of renewable energy capacity by 2030 and build strong power transmission networks to support clean energy delivery.",
  },
];

const MissionVision = () => {
  return (
    <section
      className="w-11/12 mx-auto mt-20"
      role="region"
      aria-label="Mission Vision and Goal"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ staggerChildren: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={feature.icon}
              alt={`${feature.title} icon`}
              className="w-16 h-16 mb-4"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MissionVision;