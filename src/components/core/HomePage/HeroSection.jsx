import React from 'react'
import heroImage from '../../../assets/images/Home_Assets/hero_image.png'
import Button from '../../common/Button'

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white" style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="flex flex-col items-start justify-center w-11/12 mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight"
        style={{ "text-shadow": `0px 4px 4px rgba(75, 187, 147, 1)` }}>
          The Green Energy <br /> Flows With Us
        </h1>
        <Button linkto='/about-us' active={true}>
            Know More
        </Button>
      </div>
    </section>
  )
}

export default HeroSection