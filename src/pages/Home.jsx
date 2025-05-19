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
import ServicesSectionMD from '../components/core/HomePage/ServiceSectionMD'
import HeroSectionMD from '../components/core/HomePage/HeroSection'
import AboutSectionMD from '../components/core/HomePage/AboutSection'

const Home = () => {
  useEffect(() => {
    document.title = "NexGen Energies";
  }, [])

  return (
    <div>

        {/* <HeroSection /> */}
        <HeroSectionMD />

        {/* <AboutSection /> */}
        <AboutSectionMD />

        <ServicesSection />
        {/* <ServicesSectionMD /> */}
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