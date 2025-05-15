import React from 'react'
import AboutHeroSection from '../components/core/AboutPage/AboutHeroSection'
import FoundingStory from '../components/core/AboutPage/FoundingStory'
import MissionVision from '../components/core/AboutPage/MissionVision'
import Leaders from '../components/core/AboutPage/Leaders'
import OurClients from '../components/core/HomePage/OurClients'
import Footer from '../components/common/Footer'
import Values from '../components/core/AboutPage/Values'

const About = () => {
  return (
    <div>
        <AboutHeroSection />
        <FoundingStory />
        <MissionVision />
        <Leaders />
        <Values />

        <OurClients />
        <Footer />
    </div>
  )
}

export default About