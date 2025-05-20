import React, { useEffect } from 'react'
import HeroSection from '../components/core/HomePage/HeroSection'
import AboutSection from '../components/core/HomePage/AboutSection'
import ServicesSection from '../components/core/HomePage/ServicesSection'
import WhyChooseUs from '../components/core/HomePage/WhyChooseUs'

import GoSolar from '../components/core/HomePage/GoSolar'
import CEOSection from '../components/core/HomePage/CEOSection'
import OurValues from '../components/core/HomePage/OurValues'
import LatestNews from '../components/core/HomePage/LatestNews'
import ClientSlider from '../components/core/HomePage/OurClients'
import Footer from '../components/common/Footer'
import FAQSection from '../components/core/HomePage/FAQSection'
import GoSolarMD from '../components/core/HomePage/GoSolar'
import CEOSectionMD from '../components/core/HomePage/CEOSection'
import OurValuesMD from '../components/core/HomePage/OurValues'
import LatestNewsMD from '../components/core/HomePage/LatestNews'
import ClientSliderMd from '../components/core/HomePage/OurClients'
import FAQSectionMD from '../components/core/HomePage/FAQSection'
import FooterMD from '../components/common/Footer'

const Home = () => {
  useEffect(() => {
    document.title = "NexGen Energies";
  }, [])

  return (
    <div>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <GoSolar />
        <CEOSection />
        <OurValues />
        <LatestNews />
        <ClientSlider />
        <FAQSection />
        <Footer />
    </div>
  )
}

export default Home