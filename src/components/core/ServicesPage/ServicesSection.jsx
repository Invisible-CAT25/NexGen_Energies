import React from "react";
import { motion } from "framer-motion";
import Icon1 from '../../../assets/images/Services/icon1.png'
import Icon2 from '../../../assets/images/Services/icon2.png'
import Icon3 from '../../../assets/images/Services/icon3.png'
import Icon4 from '../../../assets/images/Services/icon4.png'
import Icon5 from '../../../assets/images/Services/icon5.png'

const solarServices = [
  { id: 1, title: "EPC | Turnkey Solutions", icon: Icon1, link: "/services/end-to-end" },
  { id: 2, title: "C & I Solutions", icon: Icon2, link: "/services/epc" },
  { id: 3, title: "Rooftop Solar", icon: Icon3, link: "/services/rooftop" },
  { id: 4, title: "Ground Mount | Floating Solar", icon: Icon4, link: "/services/om" },
  { id: 5, title: "O & M Services", icon: Icon5, link: "/services/value-added" },
];

const services = [
  { id: 1, title: "EPC | Turnkey Solutions", icon: Icon1, link: "/services/end-to-end" },
  { id: 2, title: "C & I Solutions", icon: Icon2, link: "/services/epc" },
  { id: 3, title: "Rooftop Solar", icon: Icon3, link: "/services/rooftop" },
  { id: 4, title: "Ground Mount | Floating Solar", icon: Icon4, link: "/services/om" },
  { id: 5, title: "O & M Services", icon: Icon5, link: "/services/value-added" },
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
    <section className="w-11/12 max-w-6xl mx-auto pt-16">
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
            className="cursor-pointer bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center flex flex-col items-center justify-center gap-4"
            // onClick={() => window.location.href = service.link}
            style={{ boxShadow: "0 4px 20px rgba(34, 197, 94, 0.3)" }}
          >
            <img
                src={service.icon}
                alt={service.title}
                className="w-18 h-18 object-contain"
                loading="lazy"
            />

            <h3 className="text-md font-semibold text-gray-800">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;