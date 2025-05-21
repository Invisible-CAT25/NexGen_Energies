import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const HeroSection = lazy(() => import('../components/core/HeroSection'));
const FoundingStory = lazy(() => import('../components/core/AboutPage/FoundingStory'));
const MissionVision = lazy(() => import('../components/core/AboutPage/MissionVision'));
const Leaders = lazy(() => import('../components/core/AboutPage/Leaders'));
const Values = lazy(() => import('../components/core/AboutPage/Values'));
const OurClients = lazy(() => import('../components/core/HomePage/OurClients'));
const Footer = lazy(() => import('../components/common/Footer'));

const About = () => {
  useEffect(() => {
    document.title = "About | NexGen Energies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="snap-start">
          <HeroSection title="About NexGen" />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="snap-start">
          <FoundingStory />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="snap-start">
          <MissionVision />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="snap-start">
          <Leaders />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="snap-start">
          <Values />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="snap-start">
          <OurClients />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="snap-start">
          <Footer />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default About;
