import { motion } from "framer-motion";
import { FaUsers, FaBalanceScale, FaLightbulb, FaUserTie, FaUserShield, FaInfinity, FaFistRaised } from "react-icons/fa";

const values = [
  {
    title: "Empowerment",
    description:
      "By empowering every team member, we fuel innovation, encourage bold ideas, value every voice and drive collective success.",
    icon: <FaFistRaised className="text-2xl text-teal-600" />,
  },
  {
    title: "Team Work",
    description:
      "Collaboration fuels our teamwork, helping us harness diverse ideas and achieve powerful outcomes together.",
    icon: <FaUsers className="text-2xl text-teal-600" />,
  },
  {
    title: "Honesty",
    description:
      "Integrity builds trust, strengthens partnerships, and shapes our reputation through honesty and accountability.",
    icon: <FaBalanceScale className="text-2xl text-teal-600" />,
  },
  {
    title: "Innovative",
    description:
      "Innovation drives progress. By fostering creativity, agility, and forward-thinking, we meet evolving needs with impactful, future-ready solutions.",
    icon: <FaLightbulb className="text-2xl text-teal-600" />,
  },
  {
    title: "Customer-Centric",
    description:
      "Clients are our core. By prioritizing their evolving needs and exceeding expectations, we build trusted relationships that drive meaningful growth.",
    icon: <FaUserTie className="text-2xl text-teal-600" />,
  },
  {
    title: "Accountability",
    description:
      "Owning our actions end-to-end strengthens culture, deepens stakeholder trust, and fuels promise-driven performance. Accountability is our foundation.",
    icon: <FaUserShield className="text-2xl text-teal-600" />,
  },
  {
    title: "Limitless",
    description:
      "We believe in growth without boundaries. By fostering a limitless mindset, we challenge ourselves to push for excellence and explore new possibilities.",
    icon: <FaInfinity className="text-2xl text-teal-600" />,
  },
];

export default function EthicalValues() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-gradient bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text"
      >
        Our Values
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="hidden md:flex flex-col items-center justify-around bg-gradient-to-b from-richblue to-richgreen text-white px-6 py-6 rounded-xl shadow-md"
        >
          {"ETHICAL".split("").map((char, index) => (
            <motion.span
              key={char + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-5xl font-bold tracking-widest mb-2"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow p-5 flex gap-4 items-start hover:shadow-lg transition-shadow"
            >
              <div className="shrink-0">{value.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
