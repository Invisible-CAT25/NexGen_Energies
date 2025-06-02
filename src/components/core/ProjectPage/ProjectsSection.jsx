import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import continental from '../../../assets/images/project.png'

const filters = ["All", "EPC", "C & I", "Rooftop", "Ground Mount"];

const allProjects = [
  {
    id: 1,
    title: "1.5 MW",
    location: "Continental, Modipuram, Meerut",
    category: ["EPC", "Rooftop", "C & I"],
    image: continental,
    description: "Commissioned 1.5 MW solar power plant for Continental at Modipuram, Meerut, enhancing energy efficiency and sustainability. Fully operational, the project supports industrial operations with reliable clean energy."
  },
  {
    id: 2,
    title: "1 MW",
    location: "Luminous, Schneider, Kolkata",
    category: ["Rooftop", "C & I"],
    image: continental,
    description: "Ongoing 1 MW solar project at Luminous, Schneider, Kolkata, designed to enhance industrial sustainability. Currently under execution, this project aims to integrate clean energy into core operations."
  },
  {
    id: 3,
    title: "1 MW",
    location: "Luminous, Schneider, Hyderabad",
    category: ["Rooftop", "C & I"],
    image: continental,
    description: "Ongoing 1 MW solar project at Luminous, Schneider, Hyderabad, designed to enhance industrial sustainability. Currently under execution, this project aims to integrate clean energy into core operations."
  },
  {
    id: 4,
    title: "71 MW",
    location: "RRECL, Rajasthan",
    category: ["Rooftop"],
    image: continental,
    description: "Ongoing 71 MW solar project at RRECL, Rajasthan, designed to enhance industrial sustainability. Currently under execution, this project aims to integrate clean energy into core operations."
  }
  // Add more projects...
];

const ITEMS_PER_PAGE = 6;

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category.includes(activeFilter));

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <section className="w-full px-6 pt-20" id="projects">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(6);
              }}
              className={`px-4 sm:px-10 py-2 transition duration-300 hover:scale-105 text-richgreen  border-richgreen ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-richblue to-richgreen text-transparent bg-clip-text font-semibold transition-all duration-200"
                  : ""
              }`}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: false }}
              style={{ boxShadow: "0 4px 10px rgba(34, 197, 94, 0.3)" }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.length === 0 
            ? <span className="col-span-1 sm:col-span-2 lg:col-span-3 text-center">No Result Found</span> 
            : visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.location}`}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm">{project.location}</p>
                  </div>
                </motion.div>
            ))}
        </div>

        {/* Load More Button */}
        {visibleProjects.length < filteredProjects.length && (
          <div className="mt-10 text-center">
            <motion.button
              onClick={loadMore}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-richgreen text-white rounded-full hover:bg-richblue transition-all duration-200 shadow"
            >
              Load More
            </motion.button>
          </div>
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
                className="bg-white rounded-xl shadow-xl max-w-lg w-11/12 p-6 relative"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-0 right-1 text-gray-500 hover:text-gray-700 text-3xl"
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
                  {selectedProject.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
