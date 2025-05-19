import React from 'react';
import HighlightText from '../../common/HighlightText';
import solarImage from '../../../assets/images/Home_Assets/solar_service.png';
import transmissionImage from '../../../assets/images/Home_Assets/transmission_service.png';
import ServiceBtn from './ServiceBtn';
import Button from '../../common/Button';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <section className='w-11/12 max-w-7xl mx-auto flex flex-col justify-center items-center gap-8 mt-20'>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className='text-[2rem] md:text-[2.5rem] font-semibold text-center'
      >
        <HighlightText text={'Our Services'} />
      </motion.h1>

      {/* --- Renewable Energy Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.6 }}
        className="relative z-10 w-full h-[24rem] bg-cover bg-center bg-no-repeat flex items-end justify-start text-white p-6 rounded-xl overflow-hidden shadow-lg"
        style={{ backgroundImage: `url(${solarImage})` }}
      >
        <div className="h-full flex flex-col items-start justify-between">
          <h2
            className='text-[1.8rem] md:text-[2.5rem] font-semibold'
            style={{ textShadow: `0px 4px 4px rgba(80, 120, 185, 1)` }}
          >
            Renewable Energy
          </h2>

          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-5 flex-wrap">
            <ServiceBtn linkto='/services-we-offer'>OPEX Model</ServiceBtn>
            <ServiceBtn linkto='/services-we-offer'>CAPEX Model</ServiceBtn>
            <ServiceBtn linkto='/services-we-offer'>DEFERRED CAPEX Model</ServiceBtn>
          </div>
        </div>
      </motion.div>

      {/* --- Power Transmission Section with Overlap --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: false, amount: 0.6 }}
        className="-mt-52 md:-mt-72 relative z-20 w-full h-[24rem] bg-cover bg-center bg-no-repeat flex items-end justify-end text-white p-6 rounded-t-3xl shadow-2xl"
        style={{ backgroundImage: `url(${transmissionImage})` }}
      >
        <div className="h-full flex flex-col items-center justify-between text-right">
          <h2
            className='text-[1.8rem] md:text-[2.5rem] font-semibold'
            style={{ textShadow: `0px 4px 4px rgba(80, 120, 185, 1)` }}
          >
            Power Transmission
          </h2>
          <ServiceBtn linkto='/services-we-offer'>Power and Civil Services</ServiceBtn>
        </div>
      </motion.div>

      {/* --- Know More Button --- */}
      <Button linkto='/services-we-offer'>Know More</Button>
    </section>
  );
};

export default ServicesSection;