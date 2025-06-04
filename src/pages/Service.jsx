import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy load heavy sections
const HeroSection = lazy(() => import('../components/core/HeroSection'))
const SectionTemplate = lazy(() => import('../components/core/SectionTemplate'));
const ServicesSection = lazy(() => import('../components/core/ServicesPage/ServicesSection'));
const Footer = lazy(() => import('../components/common/Footer'))

import service1 from '../assets/images/Services_Assets/services1.png'
import service2 from '../assets/images/Services_Assets/services2.png'

const Service = () => {
  useEffect(() => {
    document.title = "Services | NexGen Energies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="snap-start">
          <HeroSection title="Our Services" />
          <SectionTemplate name={"Renewable Energy"} description={"At NexGen Energies, we are committed to transforming the way the world consumes energy by delivering reliable, efficient, and sustainable solar power solutions. As a leading renewable energy service provider, we specialize in designing, developing, and implementing solar energy systems for industrial, commercial, and institutional clients across India. Our mission is to empower businesses to reduce their carbon footprint, lower electricity costs, and achieve energy independence through clean, renewable energy. With a focus on cutting-edge technology, high-performance engineering, and long-term service partnerships, we offer end-to-end solar solutions—from consultation and project development to execution, operations, and maintenance. Whether you’re looking to own your solar asset through the CAPEX or Deferred CAPEX model, or prefer a zero-investment OPEX model, our team delivers customized solutions tailored to your energy needs and financial goals. Join us in building a cleaner, greener tomorrow. Harness the power of the sun—today."} image={service1} />
          <ServicesSection />
          <SectionTemplate image={service2} name={"Power Transmission"} active={true} description={"At NexGen Energies, we specialize in delivering end-to-end power transmission solutions that ensure the seamless and efficient transfer of electricity from generation sources to consumption points. As a trusted partner in the power infrastructure sector, we play a critical role in strengthening the backbone of India’s energy ecosystem. Our expertise spans the design, engineering, procurement, construction, and commissioning of high-voltage and extra high-voltage transmission lines and substations. We work with leading utilities, infrastructure developers, and government bodies to deliver projects that meet the highest standards of quality, safety, and efficiency. With a focus on technological innovation, grid reliability, and timely execution, our power transmission services enable stable and uninterrupted power flow across urban and rural geographies. We are committed to supporting India’s growing energy demands through sustainable, scalable, and cost-effective transmission infrastructure. Choose NexGen Energies as your partner in powering progress—because reliable transmission powers reliable growth."} />
          <Footer />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Service;
