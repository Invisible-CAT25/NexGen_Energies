import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy load heavy sections
const HeroSection = lazy(() => import('../components/core/HeroSection'))
const Footer = lazy(() => import('../components/common/Footer'))
const SectionTemplate = lazy(() => import('../components/core/SectionTemplate'))
const JobApplicationForm = lazy(() => import('../components/core/CareerPage/CareerForm'))

import image1 from '../assets/images/Careers/image4.png'
import image2 from '../assets/images/Careers/image2.png'
import image3 from '../assets/images/Careers/image3.png'

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
          <SectionTemplate 
            name={"Employee Engagement"} 
            description={"At the heart of every successful organization lies a motivated and engaged workforce. We believe that when employees feel valued, heard, and empowered, they give their best not just to tasks but to the larger purpose. Through open communication, recognition, collaboration, and continuous growth opportunities, we are building a culture where every individual feels connected and inspired. Employee engagement is not just an initiative; it is the way we work together. It reflects in our energy, in our shared goals, and in the joy we bring to work. Together, we create not just results but a thriving workplace culture."} 
            image={image1} />
          <SectionTemplate 
            active={true} 
            name={"Rewards & Recognition"} 
            description={"Rewards and recognition are more than just appreciation. They reflect a culture that values dedication, performance, and passion. When we celebrate the efforts of our team members, we build a sense of purpose and belonging. Recognizing excellence motivates individuals and encourages everyone to strive for their best. Whether it is a heartfelt thank you, a moment in the spotlight, or a well deserved reward, every achievement deserves to be acknowledged. We aim to create an environment where people feel appreciated, encouraged, and proud of their work. Every contribution makes a difference, and every success deserves to be celebrated."} 
            image={image2} />
          <SectionTemplate 
            name={"Learning & Development"} 
            description={"Learning and development are the foundation of personal and professional growth. We believe that continuous learning not only enhances skills but also unlocks potential. By creating opportunities to explore new ideas, build competencies, and face challenges with confidence, we empower our people to evolve with the changing times. Development is not just about training programs; it is about nurturing curiosity, encouraging innovation, and supporting each individual in their journey. When we invest in learning, we invest in the future. Together, we grow stronger, smarter, and more capable of achieving meaningful impact across every level of our organization."} 
            image={image3} />
          <JobApplicationForm />
          <Footer />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Career;
