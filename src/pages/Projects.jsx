import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy load heavy sections
const HeroSection = lazy(() => import('../components/core/HeroSection'))
const ProjectsSection = lazy(() => import('../components/core/ProjectPage/ProjectsSection'));
const Footer = lazy(() => import('../components/common/Footer'))

const Service = () => {
  useEffect(() => {
    document.title = "Projects | NexGen Energies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="snap-start">
          <HeroSection title="Projects" />
          <ProjectsSection />
          <Footer />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Service;
