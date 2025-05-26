import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import SectionTemplate from '../components/core/SectionTemplate';

// Lazy load heavy sections
const HeroSection = lazy(() => import('../components/core/HeroSection'))
const Footer = lazy(() => import('../components/common/Footer'))

const Career = () => {
  useEffect(() => {
    document.title = "Career | NexGen Energies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="snap-start">
          <HeroSection title="Career" />
          <SectionTemplate name={"Hello"} />
          <SectionTemplate active={true} name={"Hello"}  />
          <Footer />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Career;
