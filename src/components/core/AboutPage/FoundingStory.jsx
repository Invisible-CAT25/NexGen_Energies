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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
      </motion.div>
    </section>
  );
};

export default FoundingStory;
