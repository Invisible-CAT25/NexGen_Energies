import React, { useEffect } from 'react'
import AboutHeroSection from '../components/core/AboutPage/AboutHeroSection'
import FoundingStory from '../components/core/AboutPage/FoundingStory'
import MissionVision from '../components/core/AboutPage/MissionVision'
import Leaders from '../components/core/AboutPage/Leaders'
import OurClients from '../components/core/HomePage/OurClients'
import Footer from '../components/common/Footer'
import Values from '../components/core/AboutPage/Values'
import AboutHeroSectionMD from '../components/core/AboutPage/AboutHeroSectionMD'
import FoundingStoryMD from '../components/core/AboutPage/FoundingStoryMD'

const About = () => {
  useEffect(() => {
    document.title = "About | NexGen Energies";
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
        {/* <AboutHeroSection /> */}
        <AboutHeroSectionMD />

        {/* <FoundingStory /> */}
        <FoundingStoryMD />

        <MissionVision />
        <Leaders />
        <Values />

        <OurClients />
        <Footer />
    </div>
  )
}

export default About