import React from "react";
import HighlightText from "../../common/HighlightText";
import bgImage from "../../../assets/images/Home_Assets/choose_us_bg.png";
import Icon1 from "../../../assets/images/Home_Assets/subLogo1.png";
import Icon2 from "../../../assets/images/Home_Assets/subLogo2.png";
import Icon3 from "../../../assets/images/Home_Assets/subLogo3.png";
import Icon4 from "../../../assets/images/Home_Assets/subLogo4.png";
import Icon5 from "../../../assets/images/Home_Assets/subLogo5.png";
import Icon6 from "../../../assets/images/Home_Assets/subLogo6.png";
import { motion } from "framer-motion";

const features = [
  {
    icon: Icon1,
    title: "Best Commercial Rooftop Solar Partner",
    description: "Trusted by businesses for reliable, high-performance rooftop solutions.",
  },
  {
    icon: Icon2,
    title: "Best Quality at the Right Price",
    description: "Premium products and services that fit your budget.",
  },
  {
    icon: Icon3,
    title: "Team of Trusted Professionals",
    description: "Finance options designed to match your business goals.",
  },
  {
    icon: Icon4,
    title: "Timely Project Delivery",
    description: "We value your time. Our team ensures on-time execution with no compromises.",
  },
  {
    icon: Icon5,
    title: "Easy & Flexible Payments Methods",
    description: "Convenient payment options tailored for your needs.",
  },
  {
    icon: Icon6,
    title: "End to End Solutions Provider",
    description: "From planning to execution — we handle it all with expertise.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="w-full flex flex-col justify-center items-center gap-12 mt-24"
      role="region"
      aria-label="Why choose NexGen Energies"
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <HighlightText text="Why Choose Us?" />
      </motion.h2>

      {/* Features Grid with Background */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat px-4 py-10 md:px-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 flex flex-col justify-center items-center gap-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              role="group"
              aria-label={feature.title}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
