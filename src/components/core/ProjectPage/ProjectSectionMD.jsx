import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import continental from "../../../assets/images/project.png";
import HighlightText from "../../common/HighlightText";

// Data
const filters = ["All", "End-to-End", "EPC", "IPP", "Rooftop"];

const allProjects = [
  { id: 1, title: "1.5 MW", location: "Modipuram, Meerut", category: "IPP", image: continental },
  { id: 2, title: "1.5 MW", location: "Modipuram, Meerut", category: "Rooftop", image: continental },
  { id: 3, title: "5 MW", location: "Dehradun, Uttarakhand", category: "End-to-End", image: continental },
  { id: 4, title: "1.5 MW", location: "Modipuram, Meerut", category: "IPP", image: continental },
  { id: 5, title: "1.5 MW", location: "Modipuram, Meerut", category: "Rooftop", image: continental },
  { id: 6, title: "5 MW", location: "Dehradun, Uttarakhand", category: "End-to-End", image: continental },
  { id: 7, title: "1.5 MW", location: "Modipuram, Meerut", category: "Rooftop", image: continental },
  { id: 8, title: "5 MW", location: "Dehradun, Uttarakhand", category: "End-to-End", image: continental },
];

const ITEMS_PER_PAGE = 6;

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const loadMore = () => setVisibleCount((prev) => prev + ITEMS_PER_PAGE);

  return (
    <section className="w-full px-6 pt-24" id="projects" role="region" aria-label="Project Showcase">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col gap-12 items-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <HighlightText text="Our Projects" />
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(ITEMS_PER_PAGE);
              }}
              className={`px-5 py-2 rounded-full border transition duration-300 text-sm sm:text-base ${
                activeFilter === filter
                  ? "bg-green-100 text-green-800 border-green-600 shadow-sm"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          viewport={{ once: false }}
        >
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={`${project.title} in ${project.location}`}
                  className="w-full h-60 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleProjects.length < filteredProjects.length && (
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-richgreen text-white rounded-full hover:bg-green-700 transition shadow"
            >
              Load More
            </button>
          </motion.div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                  aria-label="Close modal"
                >
                  &times;
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded mb-4"
                />
                <h3 className="text-2xl font-bold mb-1">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-3">{selectedProject.location}</p>
                <p className="text-gray-700 text-sm">
                  NexGen Energies executed this project with high-quality standards, timely delivery, and cost efficiency.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
