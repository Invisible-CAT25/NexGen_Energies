import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import HighlightText from "../../common/HighlightText";

import vi from "../../../assets/images/Home_Assets/vi.png";
import continental from "../../../assets/images/Home_Assets/continental4.svg";
import rrecl from "../../../assets/images/Home_Assets/rrecl.png";
import luminous from "../../../assets/images/Home_Assets/luminous.png";

const clients = [
  { src: continental, alt: "Continental Tyres", height: "h-28" },
  { src: rrecl, alt: "RRECL Government Client", height: "h-28" },
  { src: luminous, alt: "Luminous Energy", height: "h-28" },
  { src: vi, alt: "Vi Telecom", height: "h-20" },
];

const ClientSlider = () => {
  return (
    <section className="mt-20 w-full">
      <div className="w-11/12 mx-auto text-center">
        <motion.h2
          className="text-[2.5rem] font-bold text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <HighlightText text="Our Clientele" />
        </motion.h2>

        <div className="rounded-xl p-6 bg-white"
        style={{ boxShadow: "0 4px 20px rgba(34, 197, 94, 0.3)" }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {clients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-24 flex items-center justify-center">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className={`${client.height} max-w-[120px] object-contain transition-transform duration-300 hover:scale-105`}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
