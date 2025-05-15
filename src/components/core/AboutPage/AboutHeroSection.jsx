import React from 'react'
import headerImage from '../../../assets/images/About_Assets/headerImage.png'
import Button from '../../common/Button'

const AboutHeroSection = () => {
  return (
    <section
      className="w-full h-96 bg-center bg-no-repeat flex items-start justify-center text-white" style={{ backgroundImage: `url(${headerImage})` }}
    >
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mt-16"
      style={{ "text-shadow": `0px 6px 4px rgba(0, 128, 0, 0.3)` }}>
        About NexGen
      </h1>
    </section>
  )
}

export default AboutHeroSection