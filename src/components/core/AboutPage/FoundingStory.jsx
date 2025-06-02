import React from "react";
import { motion } from "framer-motion";
import foundingStory from "../../../assets/images/About_Assets/founding_story2.png";
import HighlightText from "../../common/HighlightText";

const FoundingStory = () => {
  return (
    <section
      className="w-11/12 mx-auto mt-20 flex flex-col lg:flex-row items-center justify-between gap-8"
      role="region"
      aria-label="Our Founding Story"
    >
      <motion.div
        className="lg:w-2/5 flex items-center justify-start"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img
          src={foundingStory}
          alt="Founding story illustration"
          className="w-full max-w-sm object-contain"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        className="lg:w-3/5 flex flex-col gap-5"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-[2.5rem] font-semibold lg:w-11/12">
          <HighlightText text={"Our Founding Story"} />
        </h2>

        <p className="text-base text-gray-900 lg:w-11/12 leading-relaxed">
          Founded on January 28, 2025, NexGen Energies was established with a clear mission — to drive India’s transition toward clean, reliable, and future-ready energy solutions. Recognizing the growing demand for sustainable infrastructure, a group of passionate professionals came together to create a company focused on solar power generation and high-quality transmission systems. What started as a bold vision quickly evolved into a trusted name in the renewable energy sector.
          <br />
          From day one, our focus has been on combining technical excellence with environmental responsibility. Through utility-scale solar projects and robust transmission solutions, we aim to empower industries, institutions, and communities with dependable green energy. Every project we undertake reflects our values of innovation, quality, and long-term impact.
          <br />
          At NexGen Energies, we believe energy is more than a utility — it’s a catalyst for progress. As we continue to grow, our commitment remains rooted in building a sustainable and resilient energy future for India and beyond.
        </p>
      </motion.div>
    </section>
  );
};

export default FoundingStory;
