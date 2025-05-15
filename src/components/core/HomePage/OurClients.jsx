import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HighlightText from "../../common/HighlightText";

import vi from "../../../assets/images/Home_Assets/vi.png"
import continental from "../../../assets/images/Home_Assets/continental.png"
import rrecl from "../../../assets/images/Home_Assets/rrecl.png"
import luminous from "../../../assets/images/Home_Assets/luminous.png"

const clients = [
  { src: vi, alt: "Vi Telecom" },
  { src: continental, alt: "Continental Tyres" },
  { src: rrecl, alt: "RRECL Government Client" },
  { src: luminous, alt: "Luminous Energy" },
];

const ClientSlider = () => {
  return (
    <section className="mt-20">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-[2.5rem] font-bold mb-8">
          <HighlightText text={"Our Clientele"} />
        </h2>

        <div className="border border-green-200 rounded-lg shadow-lg p-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ delay: 2500 }}
            loop
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {clients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center h-24">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-h-full object-contain"
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
