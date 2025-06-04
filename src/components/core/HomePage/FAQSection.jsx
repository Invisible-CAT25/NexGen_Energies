import { useState, useMemo } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import HighlightText from "../../common/HighlightText";

const faqs = [
  { question: "What does NexGen Energies do?", answer: "NexGen Energies provides end-to-end renewable energy solutions, specializing in solar power and power transmission projects." },
  { question: "Why should I invest in solar energy?", answer: "Solar energy reduces electricity bills, increases property value, and supports a sustainable future with attractive government incentives." },
  { question: "How do I know if my property is suitable for solar panels?", answer: "Our experts assess your location, roof condition, and sunlight availability to determine solar feasibility." },
  { question: "What types of solar systems do you offer?", answer: "We offer on-grid, off-grid, and hybrid solar systems tailored to commercial and industrial needs." },
  { question: "How long does it take to install a solar power system?", answer: "Installation typically takes 1–3 weeks, depending on the project size and site conditions." },
  { question: "What warranties do you offer on solar panels and systems?", answer: "We provide up to 25 years performance warranty on panels and 5–10 years on inverters and installation." },
  { question: "Does NexGen Energies handle permits and government approvals?", answer: "Yes, we manage all necessary permits, documentation, and approvals for a hassle-free experience." },
  { question: "How can I contact NexGen Energies for further inquires?", answer: "You can reach us via our contact form, email, or phone listed on the Contact Us page." }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq =>
      faq.question.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="w-11/12 mx-auto mt-20" aria-label="Frequently Asked Questions">
      {/* Heading with animation */}
      <motion.h2
        className="text-[2.5rem] font-bold text-center mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <HighlightText text="FAQs" />
      </motion.h2>

      {/* Search input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search a question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-richgreen transition"
        />
      </div>

      {/* FAQ Items */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center font-semibold text-lg text-left text-gray-800"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    id={`faq-${index}`}
                    className="mt-3 text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-center col-span-full text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            No results found.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
