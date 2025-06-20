import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import EthicalValues from '../components/core/AboutPage/EthicalValues';

const HeroSection = lazy(() => import('../components/core/HeroSection'));
const FoundingStory = lazy(() => import('../components/core/AboutPage/FoundingStory'));
const MissionVision = lazy(() => import('../components/core/AboutPage/MissionVision'));
const Leaders = lazy(() => import('../components/core/AboutPage/Leaders'));
const Values = lazy(() => import('../components/core/AboutPage/Values'));
const ClientSlider = lazy(() => import('../components/core/HomePage/OurClients'));
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
          <FoundingStory />
          <MissionVision />
          <Leaders />
          <Values />
          {/* <EthicalValues /> */}
          <ClientSlider />
          <Footer />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default About;
