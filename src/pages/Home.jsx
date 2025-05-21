import React, { useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import smoothscroll from 'smoothscroll-polyfill';

// Components (lazy loaded for performance)
const HeroSection = lazy(() => import('../components/core/HomePage/HeroSection'));
const AboutSection = lazy(() => import('../components/core/HomePage/AboutSection'));
const ServicesSection = lazy(() => import('../components/core/HomePage/ServicesSection'));
const WhyChooseUs = lazy(() => import('../components/core/HomePage/WhyChooseUs'));
const GoSolar = lazy(() => import('../components/core/HomePage/GoSolar'));
const CEOSection = lazy(() => import('../components/core/HomePage/CEOSection'));
const OurValues = lazy(() => import('../components/core/HomePage/OurValues'));
const LatestNews = lazy(() => import('../components/core/HomePage/LatestNews'));
const ClientSlider = lazy(() => import('../components/core/HomePage/OurClients'));
const FAQSection = lazy(() => import('../components/core/HomePage/FAQSection'));
const Footer = lazy(() => import('../components/common/Footer'));

const Home = () => {
  useEffect(() => {
    document.title = 'NexGen Energies';
    window.scrollTo(0, 0);
    smoothscroll.polyfill();
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth overflow-x-hidden">
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <section className="snap-start">
          <HeroSection />
        </section>

        <motion.section className="snap-start" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <AboutSection />
        </motion.section>

        <motion.section className="snap-start" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <ServicesSection />
        </motion.section>

        <motion.section className="snap-start" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <WhyChooseUs />
        </motion.section>

        <motion.section className="snap-start" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <GoSolar />
        </motion.section>

        <motion.section className="snap-start" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <CEOSection />
        </motion.section>

        <motion.section className="snap-start" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <OurValues />
        </motion.section>

        <motion.section className="snap-start" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <LatestNews />
        </motion.section>

        <motion.section className="snap-start" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <ClientSlider />
        </motion.section>

        <motion.section className="snap-start" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <FAQSection />
        </motion.section>

        <section className="snap-start">
          <Footer />
        </section>
      </Suspense>
    </main>
  );
};

export default Home;
