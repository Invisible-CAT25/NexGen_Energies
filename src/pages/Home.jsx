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
import GoSolarMD from '../components/core/HomePage/GoSolarMD'
import CEOSectionMD from '../components/core/HomePage/CEOSectionMD'
import OurValuesMD from '../components/core/HomePage/OurValuesMD'
import LatestNewsMD from '../components/core/HomePage/LatestNewsMD'
import ClientSliderMd from '../components/core/HomePage/OurClientsMd'
import FAQSectionMD from '../components/core/HomePage/FAQSectionMD'
import FooterMD from '../components/common/FooterMD'

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

        {/* <GoSolar /> */}
        <GoSolarMD />

        {/* <CEOSection /> */}
        <CEOSectionMD />

        {/* <OurValues /> */}
        <OurValuesMD />

        {/* <LatestNews /> */}
        <LatestNewsMD />

        {/* <ClientSlider /> */}
        <ClientSliderMd />

        {/* <FAQSection /> */}
        <FAQSectionMD />

        {/* <Footer /> */}
        <FooterMD />
    </div>
  )
}

export default Home