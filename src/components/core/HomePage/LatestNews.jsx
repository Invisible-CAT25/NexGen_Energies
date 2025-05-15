import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HighlightText from "../../common/HighlightText";
import latestNews from "../../../assets/images/Home_Assets/latest_news1.png"

const awards = [
  {
    title: "Won Best Commercial Rooftop Installation Company Award",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: latestNews,
    alt: "Award Ceremony Image",
  },
  {
    title: "Won Best Commercial Rooftop Installation Company Award",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: latestNews,
    alt: "Award Image",
  },
  {
    title: "Won Best Commercial Rooftop Installation Company Award",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: latestNews,
    alt: "Award Presentation",
  },
];

const LatestNews = () => {
  return (
    <section className="mt-20">
      <div className="w-11/12 mx-auto">
        <h2 className="text-[2.5rem] font-bold text-center mb-8">
            <HighlightText text={"Latest News"} />
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg">
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-center">{award.title}</h3>
                  <p className="text-[17px] text-gray-600 text-center">{award.description}</p>
                </div>
                <img
                  src={award.image}
                  alt={award.alt}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestNews;
