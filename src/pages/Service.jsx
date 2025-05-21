import React, {useEffect} from 'react'
import Footer from '../components/common/Footer'
import ServiceHeroSection from '../components/core/ServicesPage/ServiceHeroSection'
import ServicesSection from '../components/core/ServicesPage/ServicesSection'

const Service = () => {
    useEffect(() => {
        document.title = "Projects | NexGen Energies";
    }, [])

  return (
    <div>
        <ServiceHeroSection />

        <ServicesSection />

        <Footer />

    </div>
  )
}

export default Service