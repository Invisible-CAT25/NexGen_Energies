import React from "react";
import { motion } from "framer-motion";
import Icon1 from '../../../assets/images/Services_Assets/icon1.svg'
import Icon2 from '../../../assets/images/Services_Assets/icon2.svg'
import Icon3 from '../../../assets/images/Services_Assets/icon3.svg'
import Icon4 from '../../../assets/images/Services_Assets/icon4.svg'
// import Icon5 from '../../../assets/images/Services_Assets/icon5.svg'
import Icon6 from '../../../assets/images/Services_Assets/icon6.svg'

const services = [
  { id: 0, title: "End to End Solutions", icon: Icon1 },
  { id: 1, title: "EPC Solutions", icon: Icon2 },
  { id: 2, title: "O & M Services", icon: Icon3 },
  { id: 3, title: "Solar Developer", icon: Icon4 },
  // { id: 4, title: "Ground Solar", icon: Icon5 },
  { id: 5, title: "Energy Storage Solutions", icon: Icon6 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const ServicesGrid = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto pt-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center flex flex-col items-center justify-between gap-4"
            // onClick={() => window.location.href = service.link}
            style={{ boxShadow: "0 4px 20px rgba(34, 197, 94, 0.3)" }}
          >
            <div className="h-[50%]">
              <img
                  src={service.icon}
                  alt={service.title}
                  className="w-18 h-18 object-contain"
                  loading="lazy"
              />
            </div>

            <h3 className="text-md font-semibold text-gray-800 h-[50%] flex items-start justify-center">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;