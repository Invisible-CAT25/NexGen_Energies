import React from "react";
import { motion } from "framer-motion";
import HighlightText from "../../common/HighlightText";
import bgImage from "../../../assets/images/Home_Assets/choose_us_bg.png";
import leader1 from "../../../assets/images/About_Assets/leader1.png";
import leader2 from "../../../assets/images/About_Assets/leader2.png";
import leader3 from "../../../assets/images/About_Assets/leader3.png";
import leader4 from "../../../assets/images/About_Assets/leader4.png";
import leader5 from "../../../assets/images/About_Assets/leader5.png";
import icon from "../../../assets/images/About_Assets/join_icon.png";
import { Link } from "react-router-dom";

const leaders = [
  {
    image: leader1,
    name: "Neeraj Kumar",
    role: "CEO",
    link: "/neeraj-kumar",
  },
  {
    image: leader2,
    name: "Vikas Mishra",
    role: "CFO",
    link: "/vikas-mishra",
  },
  {
    image: leader3,
    name: "Ashish Gupta",
    role: "Director Projects",
    link: "/ashish-gupta",
  },
  {
    image: leader4,
    name: "Ravi Gupta",
    role: "Business Head",
    link: "/ravi-gupta",
  },
  {
    image: leader5,
    name: "Hemraj Katariya",
    role: "CTO",
    link: "/hemraj-katariya",
  },
];

const Leaders = () => {
  return (
    <section
      className="w-11/12 mx-auto mt-20 flex flex-col items-center gap-8"
      role="region"
      aria-label="Leadership Team Section"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <HighlightText text="Meet Our Leaders" />
      </motion.h2>

      <motion.div
        className="w-screen bg-cover bg-center bg-no-repeat p-6 sm:p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ staggerChildren: 0.2 }}
      >
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              to={leader.link}
              className="flex flex-col items-center gap-4 group"
              aria-label={`Go to ${leader.name}'s profile`}
            >
              <div className="w-full border-b-2 border-gray-300 ">
                <img
                  src={leader.image}
                  alt={`${leader.name} - ${leader.role}`}
                  className="object-cover mx-auto"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold group-hover:text-richblue transition">
                    {leader.name}
                </h3>
                <p className="text-gray-600 text-lg">{leader.role}</p>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Join Our Team Card */}
        <motion.div
          className="bg-gradient-to-b from-[#5078B9] to-[#4BBB93] rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Link
              to="/careers"
              className="flex flex-col items-center gap-6 justify-center w-full h-full"
              aria-label={`Go to Join Our Team Page`}
            >
                <img src={icon} alt="Join Our Team" className="w-30 h-20" loading="lazy" />
                <h3 className="text-3xl font-bold text-white">Join Our Team</h3>
            </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Leaders;
