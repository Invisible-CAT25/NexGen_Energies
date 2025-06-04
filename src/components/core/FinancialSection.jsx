import React from "react";
import HighlightText from "../common/HighlightText";
import { motion } from "framer-motion";

const FinancialSection = ({ active = false, name, description, image}) => {
  return (
    <section className="w-11/12 mx-auto mt-20">
      <div
        className={`flex flex-col items-center justify-center gap-8 ${
          active ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: active ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img
            src={image}
            alt="Project Preview"
            loading="lazy"
            className="w-full"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full flex flex-col gap-5"
          initial={{ opacity: 0, x: active ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-bold">
            <HighlightText text={name} />
          </h2>

          <p className="text-sm text-[#6C6969] leading-relaxed">
            {
              description ? description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialSection;
