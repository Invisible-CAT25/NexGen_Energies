import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import HighlightText from "../../common/HighlightText";
import award1 from "../../../assets/images/Home_Assets/award1.png";
import award2 from "../../../assets/images/Home_Assets/award2.png";
import award3 from "../../../assets/images/Home_Assets/award3.png";

const awards = [
  {
    title: "Won Best Commercial Rooftop Installation Company Award",
    description: "Recognized for excellence in large-scale rooftop installations across India.",
    image: award1,
    alt: "Award Ceremony Image",
  },
  {
    title: "Won Best Commercial Rooftop Installation Company Award",
    description: "Recognized for excellence in large-scale rooftop installations across India.",
    image: award2,
    alt: "Award Ceremony Image",
  },
  {
    title: "Won Best Commercial Rooftop Installation Company Award",
    description: "Recognized for excellence in large-scale rooftop installations across India.",
    image: award3,
    alt: "Award Ceremony Image",
  },
];

const LatestNews = () => {
  return (
    <section
      className="mt-20 w-full"
      role="region"
      aria-label="NexGen Energies Awards and Recognition"
    >
      <div className="w-11/12 mx-auto flex flex-col items-center gap-8">
        {/* Section Heading */}
        <motion.h2
          className="text-[2.5rem] font-bold text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <HighlightText text="Awards & Recognition" />
        </motion.h2>

        {/* Swiper Carousel */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {awards.map((award, index) => (
              <SwiperSlide key={index}>
                <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full min-h-[430px]"
                style={{ boxShadow: "0 4px 20px rgba(34, 197, 94, 0.3)" }}>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <h3 className="text-xl font-semibold text-center mb-2">
                      {award.title}
                    </h3>
                    <p className="text-[17px] text-gray-600 text-center">
                      {award.description}
                    </p>
                  </div>
                  <img
                    src={award.image}
                    alt={award.alt}
                    loading="lazy"
                    className="w-full h-56 object-cover"
                  />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNews;
