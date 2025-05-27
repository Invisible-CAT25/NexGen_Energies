import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import SectionTemplate from '../components/core/SectionTemplate';
import HighlightText from '../components/common/HighlightText';
import JobApplicationForm from '../components/core/CareerPage/CareerForm';

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
          <motion.h2
            className="text-[2.5rem] font-bold text-center pt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <HighlightText text="Employee Engagement" />
          </motion.h2>
          <SectionTemplate name={"Hello"} />
          <SectionTemplate active={true} name={"Hello"}  />
          <motion.h2
            className="text-[2.5rem] font-bold text-center pt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <HighlightText text="Rewards And Recognition" />
          </motion.h2>
          <SectionTemplate name={"Hello"} />
          <SectionTemplate active={true} name={"Hello"}  />
          <motion.h2
            className="text-[2.5rem] font-bold text-center pt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <HighlightText text="Learning And Development" />
          </motion.h2>
          <SectionTemplate name={"Hello"} />
          <SectionTemplate active={true} name={"Hello"}  />
          {/* <CareerForm /> */}
          {/* <JobApplicationForm /> */}
          <JobApplicationForm />
          <Footer />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Career;
