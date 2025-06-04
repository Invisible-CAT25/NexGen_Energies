import { useState, useMemo } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import HighlightText from "../../common/HighlightText";

const faqs = [
  { question: "What does NexGen Energies do?", answer: "NexGen Energies specializes in renewable energy solutions, offering cutting-edge solar, wind, and battery storage technologies." },
  { question: "Where does NexGen Energies operate?", answer: "We operate globally, with key installations in North America, Europe, and Southeast Asia." },
  { question: "What services does NexGen Energies offer?", answer: "We offer consultation, design, installation, and maintenance for renewable energy systems." },
  { question: "What is NexGen Energies's renewable energy capacity?", answer: "Our capacity exceeds 5 GW across multiple projects." },
  { question: "How does NexGen Energies contribute to sustainability?", answer: "Through green innovations and carbon offset programs, we aim to build a more sustainable future." },
  { question: "How is NexGen Energies fighting climate change?", answer: "By replacing fossil fuels with renewable solutions and promoting eco-efficiency." },
  { question: "What recognition has NexGen Energies received?", answer: "We’ve been awarded the Global Clean Energy Award three years in a row." },
  { question: "How to reach NexGen Energies for queries or collaboration?", answer: "You can reach us via our contact page or email at info@nexgenenergies.co.in" }
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
