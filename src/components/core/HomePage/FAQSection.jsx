import { useState } from "react";
import HighlightText from "../../common/HighlightText";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  { 
    question: "What does NexGen Energies do?", 
    answer: "NexGen Energies specializes in renewable energy solutions, offering cutting-edge solar, wind, and battery storage technologies." },
  { 
    question: "Where does NexGen Energies operate?", 
    answer: "We operate globally, with key installations in North America, Europe, and Southeast Asia." },
  { 
    question: "What services does NexGen Energies offer?", 
    answer: "We offer consultation, design, installation, and maintenance for renewable energy systems." },
  { 
    question: "What is NexGen Energies's renewable energy capacity?", 
    answer: "Our capacity exceeds 5 GW across multiple projects." },
  { 
    question: "How does NexGen Energies contribute to sustainability?", 
    answer: "Through green innovations and carbon offset programs, we aim to build a more sustainable future." },
  { 
    question: "How is NexGen Energies fighting climate change?", 
    answer: "By replacing fossil fuels with renewable solutions and promoting eco-efficiency." },
  { 
    question: "What recognition has NexGen Energies received?", 
    answer: "We’ve been awarded the Global Clean Energy Award three years in a row." },
  { 
    question: "How to reach NexGen Energies for queries or collaboration?", 
    answer: "You can reach us via our contact page or email at contact@nexgen.com." }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-11/12 mx-auto mt-20" aria-label="Frequently Asked Questions">
      <h2 className="text-[2.5rem] font-bold text-center text-gradient mb-8">
        <HighlightText text={"FAQs"} />
      </h2>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center font-medium text-lg text-gray-900 hover:text-green-600 transition-colors"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              {faq.question}
              <span>{openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </button>
            {openIndex === index && (
              <p id={`faq-${index}`} className="mt-2 text-gray-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
