import React from 'react'
import HighlightText from '../../common/HighlightText'
import solarImage from '../../../assets/images/Home_Assets/solar_service.png'
import transmissionImage from '../../../assets/images/Home_Assets/transmission_service.png'
import ServiceBtn from './ServiceBtn'
import Button from '../../common/Button'

const ServicesSection = () => {
  return (
    <section className='w-11/12 mx-auto flex flex-col justify-center items-center gap-8 mt-20'>
        <h3 className='text-[2.5rem] font-semibold'> 
            <HighlightText text={"Our Services"} />
        </h3>

        <div
            className="w-full h-96 bg-cover bg-center bg-no-repeat flex items-end justify-start text-white p-6" style={{ backgroundImage: `url(${solarImage})`}}
        >
            <div className="h-[100%] flex flex-col items-start justify-between">
                <p className='text-[2.5rem] font-semibold'
                style={{ "text-shadow": `0px 4px 4px rgba(80, 120, 185, 1)` }}>Renewable Energy</p>

                <div className="flex flex-col items-start justify-center gap-5 md:flex-row md:items-center">
                    <ServiceBtn linkto='/services-we-offer'>
                        OPEX Model
                    </ServiceBtn>
                    <ServiceBtn linkto='/services-we-offer'>
                        CAPEX Model
                    </ServiceBtn>
                    <ServiceBtn linkto='/services-we-offer'>
                        DEFERRED CAPEX Model
                    </ServiceBtn>
                </div>
            </div>
        </div>

        <div
            className="w-full h-96 bg-cover bg-center bg-no-repeat flex items-end justify-end text-white p-6" style={{ backgroundImage: `url(${transmissionImage})`}}
        >
            <div className="h-[100%] flex flex-col items-center justify-between">
                <p className='text-[2.5rem] font-semibold'
                style={{ "text-shadow": `0px 4px 4px rgba(80, 120, 185, 1)` }}>Power Transmission</p>
                <ServiceBtn linkto='/services-we-offer'>
                    Power and Civil Services
                </ServiceBtn>
            </div>
        </div>

        <Button linkto='services-we-offer'>
            Know More
        </Button>

    </section>
  )
}

export default ServicesSection